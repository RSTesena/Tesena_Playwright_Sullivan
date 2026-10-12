import { Page, expect } from "@playwright/test";

export async function openHomepage(page: Page) {
  await page.goto("/");
}

export async function verifyHomepageLoaded(page: Page) {
  await expect(page).toHaveTitle(/PrestaShop/i);
}