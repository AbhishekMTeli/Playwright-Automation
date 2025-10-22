const {test,expect}=require("@playwright/test")
test("handeling hover action",async ({page}) => {
await page.goto("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=674893540034&hvpos=&hvnetw=g&hvrand=15715230518272999038&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9179959&hvtargid=kwd-64107830&hydadcr=14452_2316413&gad_source=1");
await page.locator("//span[@id='nav-link-accountList-nav-line-1']").hover();
await page.waitForTimeout(1000);
}
)