const { test, expect } = require("@playwright/test");

test("simulating keyboard actions", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.locator("//textarea[@id='APjFqb']").focus();
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

test("handeling suggestion options" ,async ({page})=>{
    await page.goto("https://www.google.com/");
    await page.locator("//textarea[@id='APjFqb']").fill("Abhishek");
    await page.waitForSelector("//li[@role='presentation']");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
})

test.only("handeling suggestion options(Other method)" ,async ({page})=>{
    await page.goto("https://www.google.com/");
    await page.locator("//textarea[@id='APjFqb']").fill("Abhishek");
    await page.waitForSelector("//li[@role='presentation']");
    const elements=await page.$$("//li[@role='presentation']");
    for(let i=0;i<elements.length;i++){
        const text=await elements[i].textContent();
        if(text.includes("bachchan")){
            await elements[i].click();
            break;
        }
    }
})