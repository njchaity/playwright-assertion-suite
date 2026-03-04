import { expect,test } from "@playwright/test";
import { loginpage } from "../locators/accountobject";
export class registrationelement{
    constructor(page)
{
    this.page=page;
    this.locators=new loginpage(page);
}
async clickaccounticon(){
    await this.locators.accounticon.click();
}
async clicksignupbutton(){
    await this.locators.signupbutton.click();
}
async fillfullname(){
    await this.locators.fullname.fill('test');
}
async fillemailsection(){
    await this.locators.email.fill(`user${Date.now()}@gmail.com`);
}
async fillpasswordsection(){
    await this.locators.password.fill('1234567');
}
async submitregistration(){
    await this.locators.submitbutton.click();
}
async loginbutton(){
    await this.locators.loginnavbutton.click();
}
async loginsubmit(){
    await this.locators.signinbutton.click();
}

}