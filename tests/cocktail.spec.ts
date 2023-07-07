import { test } from "@playwright/test";

test("user should be able to refresh the new data", async ({ page }) => {
  await page.goto("http://localhost:3000/home");
  await page.getByRole("button", { name: "Refresh" }).click();
});

test("user should be able to search the cocktails", async ({ page }) => {
  await page.goto("http://localhost:3000/home");
  await page.getByRole("textbox").type("New");
  await page.getByLabel("search-box-btn").click();
});
