import { test, expect } from '../../base.test'
import { loginByUser } from '../../../src/helpers/login.helper';
import { credentials } from '../../../config/config';

test.describe('Cart tests', () => {
    test.beforeEach(async ({ page }) => {
        await loginByUser(page, credentials);
    })

    test('Should add two items to cart and verify count in cart page', async ({ inventoryPage, headerPage, cartPage }) => {
        await test.step('Add two items to cart', async () => {
            await inventoryPage.addItemToCartByIndex(0);
            await inventoryPage.addItemToCartByIndex(1);
        });

        await test.step('Go to cart page', async () => {
            await headerPage.shoppingCartLink.click();
        });

        await test.step('Verify cart has two items', async () => {
            const itemCount = await cartPage.getCartItemsCount();
            expect(itemCount).toBe(2);
        });
    });
});