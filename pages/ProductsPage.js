import { expect } from "@playwright/test";

export class ProductPage {

    constructor(page) {
        this.page = page;
        this.products = this.page.locator('.shelf-item');
        this.productTitle = this.page.locator('.shelf-item__title');
    };

    async addProductToCart(product_description, exact = true) {
        const selected_product = exact
            ? this.products.filter({ has: this.page.locator(`//p[@class="shelf-item__title" and text()="${product_description}"]`) })
            : this.products.filter({ hasText: product_description });
        await expect(selected_product).toHaveCount(1);
        await selected_product.getByText('Add to cart').click({delay: 2000});
        await this.page.waitForLoadState('networkidle', {timeout: 10000}).catch(() => {});
        console.log(`Product "${product_description}" added to cart`);
    }

};
