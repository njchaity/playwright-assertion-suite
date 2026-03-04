import { expect,test } from "@playwright/test";
import { registrationelement } from "../pages/account";
test.describe("Demo evershop registration test suite",()=>{
    let Account;
    test.beforeEach(async({page})=>{
       Account = new registrationelement(page);
       await page.goto("https://demo.evershop.io/");
      })
    test("Evershop signup test suite", async()=>{
        await Account.clickaccounticon();
        await Account.clicksignupbutton();
        await Account.fillfullname();
        await Account.fillemailsection();
        await Account.fillpasswordsection();
        await Account.submitregistration();


    })
    test ("Evershop signin test suite",async()=>{
        await Account.clickaccounticon();
        await Account.fillemailsection();
        await Account.fillpasswordsection();
        await Account.loginsubmit();
    })
});