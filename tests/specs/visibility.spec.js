import { expect,test} from "@playwright/test";
test.describe("OrnageHrm locator element visiblity testing suite",()=>
{
    test.beforeEach(async({page})=>{
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    })
    test("Checking if the usernsme is visible on login page",async({page})=>{
        await expect(page.locator("//input[@placeholder='Username']")).toBeVisible();
    })
    test ("Check if the error message is hidden before login",async({page})=>{
        await expect(page.getByText("Invalid Credentials")).toBeHidden();
    })
})