import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { readFile, mkdir } from 'node:fs/promises';
const routes = ['/', '/how-it-works', '/enterprise', '/government', '/technology', '/about', '/request-demo'];

for (const width of [1440, 768, 390, 320]) {
  test(`all pages render without overflow or browser errors at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 950 });
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
    for (const route of routes) {
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('h1')).toBeVisible();
      await page.evaluate(() => document.fonts.ready);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), route).toBeTruthy();
    }
    expect(errors).toEqual([]);
  });
}

for (const route of routes) {
  test(`accessibility: ${route}`, async ({ page }) => {
    await page.goto(route);
    const scan = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    expect(scan.violations).toEqual([]);
  });
}

test('all internal links and fragment targets resolve', async ({ page, request }) => {
  const links = new Set<string>();
  for (const route of routes) {
    await page.goto(route);
    for (const href of await page.locator('a[href]').evaluateAll(nodes => nodes.map(n => n.getAttribute('href')!))) {
      links.add(new URL(href, 'http://127.0.0.1:4321' + route).href);
    }
  }
  for (const href of links) {
    const url = new URL(href);
    if (url.origin !== 'http://127.0.0.1:4321') continue;
    const response = await request.get(url.pathname + url.search);
    expect(response.status(), href).toBe(200);
    if (url.hash) {
      await page.goto(url.pathname + url.search + url.hash);
      await expect(page.locator(`[id="${url.hash.slice(1)}"]`)).toHaveCount(1);
    }
  }
});

test('walkthrough deep links and application policy controls work', async ({ page }) => {
  await page.goto('/how-it-works#distribute');
  await expect(page.locator('#separate')).toBeVisible();
  await expect(page.locator('#fragment')).toBeHidden();
  for (const id of ['fragment', 'encrypt', 'separate', 'reconstruct']) {
    await page.locator(`[data-step="${id}"]`).click();
    await expect(page.locator(`#${id}`)).toBeVisible();
    await expect(page.locator(`[data-step="${id}"]`)).toHaveAttribute('aria-current', 'step');
  }
  await page.getByRole('button', { name: 'Unapproved app', exact: true }).click();
  await expect(page.locator('#access-title')).toHaveText('File access denied');
  await expect(page.locator('#policy-result')).toHaveText('BLOCKED');
  await page.getByRole('button', { name: 'Authorized app', exact: true }).click();
  await expect(page.locator('#access-title')).toHaveText('Controlled file access');
});

test('mobile navigation opens, supports Escape and follows links', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const toggle = page.getByRole('button', { name: 'Open navigation' });
  await toggle.click();
  await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect(toggle).toBeFocused();
  await toggle.click();
  await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Technology', exact: true }).click();
  await expect(page).toHaveURL(/\/technology$/);
  await expect(page.locator('h1')).toContainText('Look inside');
});

test('demo form validates and persists a real local request', async ({ page }) => {
  await page.goto('/request-demo?interest=Enterprise');
  await expect(page.locator('#interest')).toHaveValue('Enterprise');
  await page.getByRole('button', { name: 'Submit demo request' }).click();
  await expect(page.locator('#firstName')).toBeFocused();
  await page.getByLabel('First name').fill('Test');
  await page.getByLabel('Last name').fill('Evaluator');
  await page.getByLabel('Work email').fill('test@example.com');
  await page.getByLabel('Organization').fill('Local test organization');
  await page.getByLabel('Your role').selectOption('Security architect');
  await page.getByLabel('What would you like to explore?').fill('Automated local evaluation request.');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Submit demo request' }).click();
  await expect(page.getByRole('status')).toContainText('Your request has been saved locally.');
  await expect(page.getByRole('status')).toContainText('No email has been sent.');
  const feedback = await page.getByRole('status').textContent();
  const reference = feedback?.match(/CR-[A-F0-9]{8}/)?.[0];
  expect(reference).toBeTruthy();
  const records = (await readFile('.data/demo-requests.jsonl', 'utf8')).trim().split('\n').map(line => JSON.parse(line));
  expect(records.find(record => record.reference === reference)).toMatchObject({ email: 'test@example.com', delivery: 'local-only', consent: true });
});

test('demo API rejects invalid data and cross-origin requests', async ({ request }) => {
  const invalid = await request.post('/api/demo', { multipart: { email: 'bad', firstName: 'Test' }, headers: { Accept: 'application/json', Origin: 'http://127.0.0.1:4321' } });
  expect(invalid.status()).toBe(400);
  const foreign = await request.post('/api/demo', { multipart: { firstName: 'Test' }, headers: { Origin: 'https://different.example' } });
  expect(foreign.status()).toBe(403);
});

test('keyboard skip link and reduced motion work', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  expect(await page.locator('.flow-line').evaluate(el => getComputedStyle(el).animationName)).toBe('none');
});

test('custom 404 provides a route home', async ({ page }) => {
  const response = await page.goto('/missing-page');
  expect(response?.status()).toBe(404);
  await expect(page.locator('h1')).toContainText('off the map');
  await page.getByRole('link', { name: 'Return home' }).click();
  await expect(page).toHaveURL('/');
});

test('capture desktop and mobile pages for visual review', async ({ page }) => {
  await mkdir('docs/screenshots', { recursive: true });
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of routes) {
      await page.goto(route);
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({ path: `docs/screenshots/${route === '/' ? 'home' : route.slice(1)}-${width}.png`, fullPage: true, animations: 'disabled' });
      if (route === '/') await page.screenshot({ path: `docs/screenshots/home-${width === 1440 ? 'desktop' : 'mobile'}-fold.png`, animations: 'disabled' });
      if (route === '/enterprise' && width === 1440) await page.locator('.threat-map').screenshot({ path: 'docs/screenshots/exposure-architecture.png', animations: 'disabled' });
      if (route === '/technology') {
        await page.locator('.network-visual').screenshot({ path: `docs/screenshots/network-paths-${width}.png`, animations: 'disabled' });
        await page.locator('.attacker-diagram').screenshot({ path: `docs/screenshots/attacker-path-${width}.png`, animations: 'disabled' });
      }
    }
  }
});

test('demo form remains usable without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4321/request-demo');
  await page.getByLabel('First name').fill('NoScript');
  await page.getByLabel('Last name').fill('Evaluator');
  await page.getByLabel('Work email').fill('noscript@example.com');
  await page.getByLabel('Organization').fill('Local evaluation');
  await page.getByLabel('Your role').selectOption('Security architect');
  await page.getByLabel('Area of interest').selectOption('Technical architecture');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Submit demo request' }).click();
  await expect(page).toHaveURL(/\/request-received$/);
  await expect(page.locator('h1')).toHaveText('Your request is saved.');
  await context.close();
});

test('demo form explains a server failure without claiming success', async ({ page }) => {
  await page.goto('/request-demo?interest=Enterprise');
  await page.route('**/api/demo', route => route.fulfill({ status: 503, contentType: 'application/json', body: JSON.stringify({ error: 'The request could not be saved. Please try again later.' }) }));
  await page.getByLabel('First name').fill('Failure');
  await page.getByLabel('Last name').fill('Evaluator');
  await page.getByLabel('Work email').fill('test@example.com');
  await page.getByLabel('Organization').fill('Local evaluation');
  await page.getByLabel('Your role').selectOption('Security architect');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Submit demo request' }).click();
  await expect(page.getByRole('status')).toContainText('could not be saved');
  await expect(page.getByRole('button', { name: 'Submit demo request' })).toBeEnabled();
  await expect(page.getByLabel('First name')).toHaveValue('Failure');
});


test('technical qualifications remain accessible by keyboard on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/technology#attacker-path');
  const driverDetails = page.getByText('Threat-model boundary: driver replacement and kernel-level attacks', { exact: true });
  await driverDetails.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('#attacker-path details')).toHaveAttribute('open', '');
  await expect(page.locator('#attacker-path details p')).toBeVisible();
  const networkDetails = page.getByText('Network architecture details and evaluation boundaries', { exact: true });
  await networkDetails.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('#network details p')).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBeTruthy();
  const scan = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  expect(scan.violations).toEqual([]);
});
