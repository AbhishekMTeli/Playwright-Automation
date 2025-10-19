import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.whatsapp.com/?lang=en');
  const page1Promise = page.waitForEvent('popup');
  await page.getByTestId('whatsapp_www_root').getByRole('link', { name: 'Log in' }).click();
  const page1 = await page1Promise;
  const page2Promise = page1.waitForEvent('popup');
  await page1.getByRole('button', { name: 'Get started' }).click();
  const page2 = await page2Promise;
  await page2.getByRole('button', { name: 'Yes' }).click();
  await page2.getByRole('textbox', { name: 'Tell us more (optional)' }).click();
  await page2.getByRole('button', { name: 'Copy link' }).click();
  await page2.getByRole('combobox', { name: 'Help Center search box' }).click();
  await page2.getByRole('combobox', { name: 'Help Center search box' }).fill('https://faq.whatsapp.com/497209988909970/?helpref=uf_share');
});