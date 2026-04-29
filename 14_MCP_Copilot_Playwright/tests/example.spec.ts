import { test, expect } from '@playwright/test';

// Placeholder test — confirms Playwright is wired up correctly.
// Replace or augment this in Part 3 when Copilot generates a real test.
test('playwright is installed correctly', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
