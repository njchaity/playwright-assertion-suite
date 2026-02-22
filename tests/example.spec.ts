import { test, expect } from '@playwright/test';

test.describe("automation with playwright" ,()=>{

test('has title', async ({ page }) => {
  await page.goto('https://demo.evershop.io/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://demo.evershop.io/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
})
