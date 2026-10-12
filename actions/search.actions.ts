import { Page, expect } from "@playwright/test";

export async function searchProduct(
  page: Page,
  productName: string
) {
  await page
    await page
    .locator('#search_widget input[name="s"]')
    .fill(productName);;

  await page.keyboard.press("Enter");
}

export async function verifySearchDone(page: Page) {
  await expect(page).toHaveURL(/search/i);
}