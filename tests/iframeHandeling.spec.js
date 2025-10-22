const{test,expect}=require("@playwright/test")
test("handeling i frames",async ({page}) =>{
    await page.goto("https://docs.oracle.com/javase/8/docs/api/");
    const iframe=await page.frameLocator("//frame[@title='All Packages']");
    await iframe.locator("//a[normalize-space()='java.awt']").click();
    await page.waitForTimeout(2000);
})