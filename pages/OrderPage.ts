import { Page, expect } from '@playwright/test';

export class OrderPage {

    constructor(private page: Page) {}

    async verifyOrder() {

        await expect(
            this.page.locator('.complete-header')
        ).toContainText('Thank you for your order!');
    }
}