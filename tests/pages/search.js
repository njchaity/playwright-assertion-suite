import SearchObject from "../locators/searchobject";
export default class search {
    constructor(page)
    {
        this.page=page;
        this.locator=new SearchObject(page);
    
    }
    async searchicon()
    {
        await this.locator.searchicon.click();
    }
    async searchinput()
    {
        await this.locator.searchinput("Search").fill("Modern Ceramic Vase");
       // await this.locator.searchinput.press("enter");
    }
}