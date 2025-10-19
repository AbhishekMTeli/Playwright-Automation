const{test ,expect}=require("@playwright/test")
test("Verify application title",async ({page}) =>{
await page.goto("https://google.com");
const title =await page.title();
console.log("Title is : "+title);
expect(title).toBe("Google");
await expect(page).toHaveTitle("Google");
})