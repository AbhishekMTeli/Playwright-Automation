const { test, expect } = require("@playwright/test");

test("simulating keyboard actions", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.keyboard.type("amazon");

  // Correct way to press multiple shortcuts sequentially
  await page.keyboard.press("Meta+A"); // Select all
  await page.waitForTimeout(1000);
  await page.keyboard.press("Meta+X");
  await page.waitForTimeout(2000);
  await page.keyboard.press("Meta+V"); // Paste
  await page.waitForTimeout(1000);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(1000);
});
