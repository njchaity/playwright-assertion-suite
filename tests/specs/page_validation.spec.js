import { expect, test } from "@playwright/test";
test.describe("OrangeHRM assertion test suite",()=>{
     test.beforeEach(async ({ page }) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    });

    test("Should check if the page responds with the right status code", async ({ page }) => {
        const response = await page.request.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        expect(response.status()).toBe(200);
    });

    test("Should check if the page has expected URL", async ({ page }) => {
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    });

    test("Should check if the page has correct title", async ({ page }) => {
        await expect(page).toHaveTitle("OrangeHRM");
    });

});
