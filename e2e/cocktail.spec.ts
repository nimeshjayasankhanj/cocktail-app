import { test } from "@playwright/test";
require("dotenv").config();

test("user should be able to refresh the new data", async ({ page }) => {
  await page.goto(`${process.env.REACT_APP_URL}/home`);
  await page.getByRole("button", { name: "Refresh" }).click();
});

test("user should be able to search the cocktails", async ({ page }) => {
  await page.goto(`${process.env.REACT_APP_URL}/home`);
  await page.getByRole("textbox").type("New");
  await page.getByLabel("search-box-btn").click();
});
