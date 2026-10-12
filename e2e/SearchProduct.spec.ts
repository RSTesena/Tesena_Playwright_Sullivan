import { test } from "@playwright/test";

import {
  openHomepage
} from "../actions/navigation.actions";

import {
  searchProduct,
  verifySearchDone
} from "../actions/search.actions";


test("User can search for product", async ({ page }) => {

  await openHomepage(page);

  await searchProduct(
    page,
    "mug"
  );

  await verifySearchDone(
    page
  );
});