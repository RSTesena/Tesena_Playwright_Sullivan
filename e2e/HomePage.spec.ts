import { test } from "@playwright/test";

import {
  openHomepage,
  verifyHomepageLoaded
} from "../actions/navigation.actions";

test("Homepage should load successfully", async ({ page }) => {

  await openHomepage(page);

  await verifyHomepageLoaded(page);
});