import { expect,test } from "@playwright/test";
test.describe("Text and value assertion test suite" ,async()=>{
    test("Title has the exact same text that user is expecting",async({page})=>{
        await page.goto("https://demo.evershop.io/");
        await expect (page.getByRole("heading",{name:"Kids shoes collection"})).toHaveText("Kids shoes collection");
    })
    test("Checking if the partial text is matching with the expected one",async({page})=>{
        await page.goto("https://demo.evershop.io/");
        await expect(page.getByRole("heading",{name: "Desk Pen Holder - White"})).toContainText("Desk");
    })
    test ("Checking whether user is getting the expected input value",async({page})=>{
        await page.goto("https://demo.evershop.io/account/login");
        await page.locator("//input[@id='field-email']").fill("test+122@gmail.com");
        await expect(page.locator("//input[@id='field-email']")).toHaveValue("test+122@gmail.com");
    })
})