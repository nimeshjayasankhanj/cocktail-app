import { test } from "@playwright/test";

test("user should be able to add cocktails to favorite lists", async ({
  page,
}) => {
  await page.goto(`${process.env.REACT_APP_URL}/home`);
  await page.getByRole("textbox").type("New");
  await page.getByLabel("search-box-btn").click();
  await page.getByLabel("mark-favorite1").click();
});
