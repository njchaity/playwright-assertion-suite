import { expect,test } from "@playwright/test";
test.describe("Text and value assertion test suite" ,async()=>{
    test("Title has the exact same text that user is expecting",async({page})=>{
        await page.goto("https://demo.evershop.io/");
        await expect (page.getByText("Kids shoes collection")).toHaveText("Kids shoes collection");
    })
})