const { test, expect } = require("@playwright/test");

test("handling file uploads", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/upload");

  await page.locator("#file-upload").setInputFiles("/Users/ggipl/Desktop/Screenshot 2025-10-20 at 10.00.03 AM.png");
  await page.locator("#file-submit").click();
  
  const successHeader = page.locator("//h3[normalize-space()='File Uploaded!']");

  // Assertion (Playwright automatically waits for the element)
  await expect(successHeader).toHaveText("File Uploaded!");

  // Optional: log the text
  console.log(await successHeader.textContent());

  await page.waitForTimeout(2000);
});
