// Test-only HTTP harness for the compiled Vercel function and static assets.
// This is not a deployment server or an emulator of Vercel's infrastructure.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { pathToFileURL } from 'node:url';

const output = resolve('.vercel/output');
const staticRoot = resolve(output, 'static');
const config = JSON.parse(await readFile(resolve(output, 'config.json'), 'utf8'));
if (config.version !== 3) throw new Error('Expected Vercel Build Output API v3.');
const functionRoot = resolve(output, 'functions/_render.func');
const functionConfig = JSON.parse(await readFile(resolve(functionRoot, '.vc-config.json'), 'utf8'));
if (functionConfig.runtime !== 'nodejs22.x') throw new Error('Expected Node.js 22 runtime.');
const { default: handler } = await import(pathToFileURL(resolve(functionRoot, functionConfig.handler)).href);
const types = { '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.txt': 'text/plain', '.html': 'text/html' };

createServer(async (req, res) => {
  try {
    const pathname = new URL(req.url, 'http://localhost').pathname;
    const file = resolve(staticRoot, '.' + decodeURIComponent(pathname));
    if (file.startsWith(staticRoot + sep) && await stat(file).then(s => s.isFile(), () => false)) {
      res.setHeader('Content-Type', types[extname(file)] || 'application/octet-stream');
      res.end(req.method === 'HEAD' ? undefined : await readFile(file));
      return;
    }
    const route = config.routes.find(r => r.dest && new RegExp(r.src).test(pathname));
    if (!route || route.dest !== '_render') throw new Error('Unexpected generated route.');
    if (route.status) res.statusCode = route.status;
    await handler(req, res);
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.end('Test harness failure');
  }
}).listen(Number(process.env.PORT || 4321), '127.0.0.1');
