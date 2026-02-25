import { expect,test } from "@playwright/test";
test.describe("DemoWebsite element visbility check test suite",()=>{
    /*test.beforeEach(async({page})=>{
        await page.go("https://demoqa.com/checkbox");
    }
    )*/
    test("Check if the checkbox is button is checked",async({page})=>{
        await page.goto("https://demoqa.com/checkbox");
        await page.getByRole("checkbox" ,{name:"Select Home"}).click();
        await expect(page.getByRole("checkbox" ,{name:"Select Home"})).toBeChecked();

    })
})
