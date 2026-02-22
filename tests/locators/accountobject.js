export default class accountobject{
    constructor(page)
    {
        this.page=page;
        this.accounticon=page.locator("//a[contains(@href ,'account')]");
        //this.emailsection=page.locator("//input[@name='email']");
        //this.passwordsection=page.locator("//input[@type='password']");
        this.signupbtn=page.locator("//a[contains(.,'Create an account')]");
        this.signinbtn=page.locator("//button[@class='button primary']");
        this.namebtn=page.locator("//input[@name='full_name']");
        this.email=page.locator("//input[@name='email']");
        this.password=page.locator("//input[@type='password']");
        this.signupsubmit=page.locator("//button[@type='submit']");
        this.logout=page.locator("//a[contains(text(),'Logout')]");
    }
    
}