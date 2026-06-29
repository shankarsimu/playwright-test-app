    import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { OrderPage } from '../pages/OrderPage';

import { testData } from '../utils/testData';

test('Complete E-Commerce Flow', async ({ page }) => {

    await page.goto('/');

    const login = new LoginPage(page);
    const home = new HomePage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);
    const order = new OrderPage(page);

    await login.login(
        testData.username,
        testData.password
    );

    await home.addBackpack();

    await home.openCart();

    await cart.checkout();

    await checkout.enterDetails(
        testData.firstname,
        testData.lastname,
        testData.zipcode
    );

    await checkout.finish();

    await order.verifyOrder();

});