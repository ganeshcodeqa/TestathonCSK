import { expect } from "@playwright/test";

export class OrderPage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Navigate to the orders page directly
   */
  async goto() {
    await this.page.goto(`${process.env.URL}${dashboardConfig.URL}`);
    console.log("Navigated to Orders page");
  }

  /**
   * Click on the Orders link in the navigation
   */
  async clickOrdersLink() {
    await this.page.getByRole("link", { name: "Orders" }).click();
    console.log("Orders link clicked");
  }

  /**
   * View details of an order by its ID
   * @param {string} orderId - ID of the order to view
   */
  async viewOrderById(orderId) {
    const orderLocator = this.page.locator(`[id="${orderId}"]`);
    if ((await orderLocator.count()) > 0) {
      await orderLocator.click();
      console.log(`Viewed order with ID: ${orderId}`);
    } else {
      console.warn(`Order ID ${orderId} not found`);
    }
  }

  /**
   * Check if order exists by ID
   * @param {string} orderId - ID of the order to check
   * @returns {Promise<boolean>} Whether the order exists
   */
  async orderExists(orderId) {
    const orderElement = this.page.locator(`[id="${orderId}"]`);
    const visible = await orderElement.isVisible();
    console.log(`Order ${orderId} exists: ${visible}`);
    return visible;
  }

  /**
   * Get the count of orders displayed on the page
   * @returns {Promise<number>} Number of orders displayed
   */
  async getOrderCount() {
    const count = await this.page.locator(".order-item").count();
    console.log(`Total orders found: ${count}`);
    return count;
  }

  /**
   * Get order status by ID
   * @param {string} orderId - ID of the order
   * @returns {Promise<string>} Status of the order
   */
  async getOrderStatus(orderId) {
    const statusElement = this.page
      .locator(`[id="${orderId}"]`)
      .getByText(/Delivered|Processing|Shipped/);
    const status = await statusElement.textContent();
    console.log(`Order ${orderId} status: ${status}`);
    return status;
  }

  /**
   * View multiple orders by their IDs
   * @param {string[]} orderIds - Array of order IDs to view
   */
  async viewMultipleOrders(orderIds) {
    for (const orderId of orderIds) {
      await this.viewOrderById(orderId);
    }
    console.log("Viewed multiple orders:", orderIds);
  }
}
