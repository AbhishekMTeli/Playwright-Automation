import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://itrainppett.etihad.ae/ITMS/discovery?entityID=https%3A%2F%2Fitrainppett.etihad.ae%2FITMS%2Fmetadata&returnIDParam=idp');
  await page.getByRole('link', { name: 'Click here to Login' }).click();
  await page.locator('#textbox1').fill('Admin');
  await page.locator('#textbox2').fill('Etihad@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Records ' }).click();
  await page.getByRole('link', { name: ' Grading Menu ' }).click();
  await page.getByRole('link', { name: 'Grading', exact: true }).click();
  await page.locator('#aircrafts_list').selectOption('3');
  await page.locator('#datepicker').click();
  await page.getByRole('cell', { name: '20', exact: true }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('test');
  await page.getByText('TEST ITRAIN (123456)t Test create (112233)', { exact: true }).click();
  await page.locator('#ui-id-5').click();
  await page.getByRole('button', { name: 'NEXT' }).click();
  await page.locator('#popup').getByText('OK').click();
});