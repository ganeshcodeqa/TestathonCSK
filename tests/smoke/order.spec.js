// @ts-check
import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { LoginPage } from "../../pages/LoginPage";
import { OrderPage } from "../../pages/OrderPage";
import * as fs from "fs";

test("Verify that user can view existing orders and check their status : TC-106", async ({
  page,
}) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const orderPage = new OrderPage(page);

  await test.step("Login and validate dashboard", async () => {
    await homePage.openApplication();
    await homePage.openLoginPage();
    await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
    await loginPage.validateDashboard();
  });

  await test.step("Navigate to Orders page", async () => {
    await orderPage.clickOrdersLink();
  });

  await test.step("View specific orders by IDs and verify status", async () => {
    // Read latest order details from JSON
    const orderData = JSON.parse(
      fs.readFileSync("tests/test-data/orders.json", "utf-8")
    );
    const orderIds = [orderData.orderNumber]; // dynamically pull order number(s)

    await orderPage.viewMultipleOrders(orderIds);

    for (const orderId of orderIds) {
      const orderExists = await orderPage.orderExists(orderId);
      expect(orderExists).toBeTruthy();

      const orderStatus = await orderPage.getOrderStatus(orderId);
      expect(orderStatus).toContain("Delivered");
    }
  });
});
