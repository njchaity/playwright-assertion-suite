import search from "../pages/search";
import {expect, test} from "@playwright/test";
test.describe.configure({mode:"serial"});
test.describe("Evershop test suite",()=>{
    let Search,page,context,response;
    test.beforeAll(async({browser})=>{
       context =await browser.newContext();
        page= await context.newPage();
       Search = await new search(page);
        response = await page.goto("https://demo.evershop.io/");
        

    })
    test("The URL should have responsed with the status code 200",async({})=>{
        expect (response.status()).toBe(200);

    })
    /*test("Successfully registered to the system" ,async({})=>{
        await expect(Search.locator.searchicon).toBeVisible();

  })*/
});