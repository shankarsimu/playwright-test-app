import { Page } from '@playwright/test';

export class HomePage {

    constructor(private page: Page) {}

    async addBackpack() {

        await this.page.click('#add-to-cart-sauce-labs-backpack');
    }

    async openCart() {

        await this.page.click('.shopping_cart_link');
    }
}