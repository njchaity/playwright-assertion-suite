export default class SearchObject{
    constructor(page)
    {
        this.page=page;
        this.searchicon=page.locator("//a[@class='search__icon']");
        //this.searchinput=page.locator("//input[@placeholder='Search']");
    }
        searchinput (habijabi)
        {
            return this.page.locator("//input['@placeholder=${habijabi}']");
        }

}