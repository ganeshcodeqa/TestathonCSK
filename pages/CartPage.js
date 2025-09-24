import { expect } from "@playwright/test";

export class CartPage {

    constructor(page) {
        this.page = page;
    };

    async openCartTray() {
        const float_cart = this.page.locator('.float-cart');
        const bag = this.page.locator('.float-cart > .bag');
        await expect(float_cart).toContainClass('open', {timeout: 10000}).catch(async () => { 
            // await expect(bag).toContainClass('closed', {timeout: 5000});
            const cartClass = await float_cart.getAttribute('class');
            console.log('float_cart class:', cartClass);
            await bag.click();
            console.log('Cart tray opened by clicking the bag icon');
        });
        await expect(bag).toContainClass('open', {timeout: 5000});
        console.log('Cart tray is now open');
    }

    async checkoutCartItems() {
        await this.page.getByText('Checkout').click();
        console.log('Checkout button clicked');
    }

};
