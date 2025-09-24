// @ts-check
import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { LoginPage } from "../../pages/LoginPage";
import { ProductPage } from "../../pages/ProductsPage";
import { CartPage } from "../../pages/CartPage";
import { ConfirmationPage } from "../../pages/ConfirmationPage";
import { CheckoutPage } from "../../pages/CheckoutPage";

test("Checkout any Iphone product: TC-135", async ({ page }) => {
  const product_description = "iPhone 12";
  const shippingDetails = {
    firstName: "Ganesh",
    lastName: "Manoharan",
    address: "Velchery  Main road",
    state: "Chennai",
    postalCode: "600042",
  };

  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const confirmationPage = new ConfirmationPage(page);

  await test.step("Login and validate dashboard", async () => {
    // await page.goto('/');
    await homePage.openApplication();
    await homePage.openLoginPage();
    await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
    await loginPage.validateDashboard();
  });
  await test.step("Add product to cart", async () => {
    await productPage.addProductToCart(product_description);
  });
  await test.step("Checkout cart items", async () => {
    // await cartPage.openCartTray();
    await cartPage.checkoutCartItems();
  });
  await test.step("Complete shipping details", async () => {
    await checkoutPage.completeShippingDetails(
      shippingDetails.firstName,
      shippingDetails.lastName,
      shippingDetails.address,
      shippingDetails.state,
      shippingDetails.postalCode
    );
  });
  await test.step("Validate order confirmation message", async () => {
    await confirmationPage.validateOrderConfirmationMessage();
  });
  await test.step("Save order number to JSON", async () => {
    await confirmationPage.saveOrderNumberToJson();
  });
});
