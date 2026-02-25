import { expect,test } from "@playwright/test";
test.describe("DemoWebsite element visbility check test suite",()=>{

    test("Check if the checkbox is button is checked",async({page})=>{
        await page.goto("https://demoqa.com/checkbox")
        await page.getByRole("checkbox" ,{name:"Select Home"}).click();
        await expect(page.getByRole("checkbox" ,{name:"Select Home"})).toBeChecked();

    })
    test ("Checking if the Element is enabled" ,async({page})=>{
        await page.goto("https://demoqa.com/text-box");
        await expect(page.getByRole("button",{name :"Submit"})).toBeEnabled();
    })
    test("Check whether the element is disabled",async({page})=>{
        await page.goto("https://demoqa.com/radio-button");
        await expect(page.getByRole("radio" ,{name:"No"})).toBeDisabled();
    })

})
