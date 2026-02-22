import { promiseHooks } from "node:v8";
import account from "../pages/account";
import {test} from "@playwright/test";
test.describe.configure({mode:"serial"});
test.describe("Evershop test suite",()=>{
    let Account,page,context;
    test.beforeAll(async({browser})=>{
       context =await browser.newContext();
        page= await context.newPage();
        Account= await new account(page);
        await page.goto("https://demo.evershop.io/");



    })
    test("Successfully registered to the system" ,async({})=>{
        await Account.clickAccountIcon();
        await page.waitForTimeout(500);
        await Account.clickCreateaccount();
        await page.waitForTimeout(1000);
        await Account.enterNamesection("test098967564");
        await Account.enterEmailSection (`test${Date.now()}@gmail.com`);
        await page.waitForTimeout(1000);
        await Account.clickPasswordsection("password@");
        await Promise.all([page.waitForNavigation(),Account.clickSignupSubmit()]);
});
    test("Successfully logged out of the system" , async({})=>{
        await Promise.all([page.waitForNavigation(), Account.clickAccountIcon()]);
        await Account.clickLogout();

     })
    test("Successfully log in the system", async({})=>{
        await Account.clickAccountIcon();
        await page.waitForTimeout(2000);
        await Account.enterEmailSection(`test${Date.now()}@gmail.com` );
        await Account.clickPasswordsection("password@");
        await Account.clickonlogin();

    });
    
});