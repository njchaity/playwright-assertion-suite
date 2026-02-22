import accountobject from "../locators/accountobject";

export default class account{
    constructor(page)
    {
        this.page=page;
        this.locator=new accountobject(page);
    }
    async clickAccountIcon()
    {
        await this.locator.accounticon.click();
    }

    async clickCreateaccount(){
        await this.locator.signupbtn.click();
    }

    async enterNamesection(name)
    {
        await this.locator.namebtn.fill(name);
    }

    async enterEmailSection(fullemail)
    {
        await this.locator.email.fill(fullemail);
    }
    async clickPasswordsection(password)
    {
        await this.locator.password.fill(password);
    }
    async clickSignupSubmit()
    {
        await this.locator.signupsubmit.click();
    }
     async clickLogout()
    {
        await this.locator.logout.click();
    }
    async clickonlogin()
    {
        await this.locator.signinbtn.click();

    }


    /*async clickemailsection(emailsection)
    {
        await this.locator.emailsection.fill(emailsection);
    }

    async clickPasswordsection()
    {
        await this.locator.passwordsection.fill(passwordsection);
    }
    async clickLogout()
    {
        await this.locator.logout.click();
    }*/



}