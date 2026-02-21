import { expect,test } from "@playwright/test";
import { url } from "node:inspector";
test.describe("playwright assertion test suite" ,async()=>{
    test("First assertion test" , async({page})=>{
       const response = await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
       expect(response.status()).toBe(200);
    })
    

})