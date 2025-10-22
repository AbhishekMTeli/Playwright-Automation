const { test, expect } = require("@playwright/test");

test("handling the javascript alert type alert", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  page.on('dialog', async (dialog) => {
    expect(dialog.type()).toContain("alert");
    expect(dialog.message()).toContain("I am a JS Alert");
    await dialog.accept();
  });

  await page.locator("//button[@onclick='jsAlert()']").click();

  const result = await page.locator("//p[@id='result']");
  await expect(result).toHaveText("You successfully clicked an alert");
});

test("handling the javascript alert type confirm", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  page.on('dialog', async (dialog) => {
    expect(dialog.type()).toContain("confirm");
    expect(dialog.message()).toContain("I am a JS Confirm");
    await dialog.accept();
  });

  await page.locator("//button[@onclick='jsConfirm()']").click();

  const result = await page.locator("//p[@id='result']");
  await expect(result).toHaveText("You clicked: Ok");
});

test.only("handling the javascript alert type JS prompt", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  page.on('dialog', async (dialog) => {
    expect(dialog.type()).toBe("prompt");
    expect(dialog.message()).toContain("I am a JS prompt");
    await dialog.accept("accepting alert");
  });

  await page.locator("//button[@onclick='jsPrompt()']").click();

  const result = await page.locator("//p[@id='result']");
  await expect(result).toHaveText("You entered: accepting alert");
});

