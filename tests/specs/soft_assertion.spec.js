import { expect ,test} from "@playwright/test";
test.describe("Soft assertion test suite" ,()=>{
    test("check whether the text is matching",async({page})=>{
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await expect.soft(page.getByRole("StaticText",{name:"Username"})).toHaveText("Username : Admin");
    })
    test("Check whether the next test is working",async({page})=>{
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await expect(page.getByRole("textbox",{name:"Username"})).toHaveAttribute("Placeholder","Username");
    })
}
)