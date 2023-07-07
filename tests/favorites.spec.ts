import { test } from "@playwright/test";

test("user should be able to add cocktails to favorite lists", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/home");
  await page.getByRole("textbox").type("New");
  await page.getByLabel("search-box-btn").click();
  await page.getByLabel("mark-favorite1").click();
});

test("user should be able to add cocktails to favorite lists and see it", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/home");
  await page.getByRole("textbox").type("New");
  await page.getByLabel("search-box-btn").click();
  await page.getByLabel("mark-favorite1").click();
  await page.goto("http://localhost:3000/favorites");
});
