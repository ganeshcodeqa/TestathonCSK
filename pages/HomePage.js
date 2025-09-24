import { expect } from "@playwright/test";
import { loginConfig } from "../configs/page-config";

export class HomePage {
  constructor(page) {
    this.page = page;
  }

  async openApplication() {
    await this.page.goto(`${process.env.URL}`);
    //await this.page.goto(`https://testathon.live`);
    console.log(`Navigated to ${await this.page.url()}`);
  }

  async openLoginPage() {
    await this.page.getByRole("link", { name: "Sign In" }).click();
    await expect(this.page).toHaveURL(`${process.env.URL}${loginConfig.URL}`);
    console.log("Login page opened");
  }

  async addFavorite() {
    let i;
    for (i = 1; i <= 6; i++) {
      await this.page.locator(".MuiIconButton-label").nth(i).click();
    }
  }

  async navigateToFavorites() {
    await this.page.locator("#favourites").click();
  }

  async verifyFavorites(count) {
    await expect(
      this.page.getByText(`${count} Product(s) found.`)
    ).toBeVisible();
  }

  async removeFavorite() {
    await this.page.locator(".MuiIconButton-label").nth(1).click();
  }

  async applyOnePlusFilter() {
    await this.page.waitForTimeout(2000);

    await this.page
      .locator('//span[normalize-space()="OnePlus"]')
      .first()
      .click();
    await expect(this.page.getByText("iPhone").first()).not.toBeVisible();
    await expect(this.page.getByText("Galaxy").first()).not.toBeVisible();
    await expect(this.page.getByText("Pixel").first()).not.toBeVisible();
  }
}
