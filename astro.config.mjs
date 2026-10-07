import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// Vercel supplies these non-secret hostnames automatically at build time.
// Trust only this deployment's hosts, preserving Astro's origin protection.
const deploymentHosts = [...new Set([
  process.env.VERCEL_URL,
  process.env.VERCEL_BRANCH_URL,
  process.env.VERCEL_PROJECT_PRODUCTION_URL,
].filter(Boolean))];

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  server: { port: 4321 },
  security: { allowedDomains: [
    { hostname: 'localhost' },
    { hostname: '127.0.0.1' },
    ...deploymentHosts.map(hostname => ({ hostname, protocol: 'https' })),
  ] },
  devToolbar: { enabled: false },
});
