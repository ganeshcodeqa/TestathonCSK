import { expect } from "@playwright/test";
import { promises as fs } from 'fs';

export class ConfirmationPage {

    constructor(page) {
        this.page = page;
        this.orderConfirmationMessage = this.page.locator('[data-test="shipping-address-heading"]');
        this.continueShoppingButton = this.page.getByRole('button', { name: 'Continue Shopping »' });
        this.downloadReceiptButton = this.page.locator('a#downloadpdf');
        this.orderNumberLabel = this.page.locator('div.checkout-form strong');
    };

    async validateOrderConfirmationMessage() {
        await expect(this.orderConfirmationMessage).toBeVisible();
        console.log('Order confirmation message is visible'); 
    }

    async saveOrderNumberToJson() {
        const orderNumber = await this.orderNumberLabel.innerText();
        console.log('Order number:', orderNumber);
        const filePath = 'outputs/orders.json';
        const folderPath = 'outputs';

        // Ensure the folder exists
        try {
            await fs.mkdir(folderPath, { recursive: true });
        } catch (err) {
            console.error('Error creating folder:', err);
        }

        let orders = [];
        try {
            const data = await fs.readFile(filePath, 'utf-8');
            orders = JSON.parse(data);
        } catch (err) {
            // File might not exist, start with empty array
        }
        orders.push({ orderNumber });
        await fs.writeFile(filePath, JSON.stringify(orders, null, 2));
    }

};
