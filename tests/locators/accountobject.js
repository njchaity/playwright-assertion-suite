import { expect , test } from "@playwright/test";

export class loginpage{
    constructor(page){
        this.page=page;
        this.accounticon=page.locator("//a[@href='https://demo.evershop.io/account/login']");
        this.signupbutton=page.locator("//a[contains(text(),'Create an account')]");
        this.fullname=page.locator("//input[@id='field-full_name']");
        this.email=page.locator("//input[@name='email']");
        this.password=page.locator("//input[@type='password']");
        this.submitbutton=page.locator("//button[contains(text(),'Sign Up')]");
        this.loginnavbutton=page.getByRole("link" ,{name:"Login"});
        this.signinbutton=page.getByRole("button",{name:"Sign In"});
    }
}
