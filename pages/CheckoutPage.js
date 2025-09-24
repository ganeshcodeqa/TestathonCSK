import { expect } from "@playwright/test";

export class CheckoutPage {

    constructor(page) {
        this.page = page;
        this.orderSummaryHeader = this.page.getByRole('heading', { name: 'Order Summary' });
        this.productTitle = this.page.locator('.product-title');
    };

async completeShippingDetails(firstName, lastName, address, state, postalCode) {
    console.log('Filling shipping details:', { firstName, lastName, address, state, postalCode });
    await this.page.getByRole('textbox', { name: 'First Name' }).click();
    await this.page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
    await this.page.getByRole('textbox', { name: 'Last Name' }).click();
    await this.page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
    await this.page.getByRole('textbox', { name: 'Address' }).click();
    await this.page.getByRole('textbox', { name: 'Address' }).fill(address);
    await this.page.getByRole('textbox', { name: 'State/Province' }).click();
    await this.page.getByRole('textbox', { name: 'State/Province' }).fill(state);
    await this.page.getByRole('textbox', { name: 'Postal Code' }).click();
    await this.page.getByRole('textbox', { name: 'Postal Code' }).fill(postalCode);
    await this.page.getByRole('button', { name: 'Submit' }).click({delay: 2000});
    console.log('Shipping details submitted');
}

};
