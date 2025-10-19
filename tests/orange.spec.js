const{test,expect}=require("@playwright/test");
// test.use({viewport : {height :600 ,width : 400}})
test.only("login automation and logout automation" ,async ({page}) =>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.getByPlaceholder("Username").fill("Admin");
await page.locator("//input[@name='password']").fill("admin123");
await page.locator("//button").click();
await expect(page).toHaveURL(/dashboard/);
await page.getByAltText("profile picture").click();
await page.getByText("Logout").click();
await expect(page).toHaveURL(/login/);
// await page.waitForTimeout(5000);
})

test("verify the error message", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.getByPlaceholder("Username").fill("admin");
  await page.locator("//input[@name='password']").fill("admin1123");
  await page.locator("//button").click();

  const errorMessageLocator = page.locator("//div[@class='oxd-alert-content oxd-alert-content--error']");
  await expect(errorMessageLocator).toContainText("credentials");
  await expect(errorMessageLocator).toHaveText("Invalid credentials");
});
