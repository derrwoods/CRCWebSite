import { defineConfig } from '@playwright/test';
import { existsSync } from 'node:fs';
const port = Number(process.env.TEST_PORT || '4321');
if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('TEST_PORT must be a valid port number.');
const baseURL = `http://127.0.0.1:${port}`;
export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  workers: 2,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL,
    launchOptions: { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE || (existsSync('/usr/bin/chromium') ? '/usr/bin/chromium' : undefined), args: ['--no-sandbox'] },
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  webServer: {
    command: `PORT=${port} node ./tests/serve-vercel.mjs`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 30000,
  },
});
