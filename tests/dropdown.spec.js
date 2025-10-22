const{test,expect}=require('@playwright/test');
test.only("dropdown handeling when tag is select", async ({page}) => {
    await page.goto("https://freelance-learn-automation.vercel.app/signup");
    await page.locator("#state").selectOption({label:"Karnataka"});
    await page.waitForTimeout(1000);
    await page.locator("#state").selectOption({value:"Goa"});
    await page.waitForTimeout(1000);
    await page.locator("#state").selectOption({index:3});
    const value =await page.locator("#state").textContent();
    console.log(value);
    await expect(value).toContain("Bihar");
    await page.waitForTimeout(3000);
})

test.only("multi select dropdown", async ({page}) => {
    await page.goto("https://freelance-learn-automation.vercel.app/signup");
    await page.locator("#hobbies").selectOption(["Playing","Reading"]);
    await page.waitForTimeout(3000);
})

test("handeling non select tag dropdowns", async ({page}) => {

})