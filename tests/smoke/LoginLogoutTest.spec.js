// @ts-check
import dotenv from "dotenv";
dotenv.config();

import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { LoginPage } from "../../pages/LoginPage";

test("Login & Logout Test : TC-128 TC-129", async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);

  await test.step("Opening Login Page", async () => {
    // await page.goto('/');
    await homePage.openApplication();
    await homePage.openLoginPage();
  });
  await test.step("Enter username and password", async () => {
    await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
  });
  await test.step("Validate dashboard", async () => {
    await loginPage.validateDashboard();
  });
  await test.step("Logout from Dashboard", async () => {
    await loginPage.logout();
  });
});
