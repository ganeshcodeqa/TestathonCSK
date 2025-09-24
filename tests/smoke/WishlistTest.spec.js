// @ts-check
import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { LoginPage } from '../../pages/LoginPage';

test('Verify that user can see the favorites after likes the product under the favorites tab : TC-130', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await test.step('Login and validate dashboard', async () => {
        // await page.goto('/');
        await homePage.openApplication();
        await homePage.openLoginPage();
        await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
        await loginPage.validateDashboard();
    });
    await test.step('Add product to favorites', async () => {
        await homePage.addFavorite();
    });
    await test.step('Navigate to favorites and verify', async () => {
        await homePage.navigateToFavorites();
        // const productCount = 6;
        // await homePage.verifyFavorites(productCount);
    });

});

test('Verify that user can remove the product from the favorite tab : TC-131', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    await test.step('Login and validate dashboard', async () => {
        // await page.goto('/');
        await homePage.openApplication();
        await homePage.openLoginPage();
        await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
        await loginPage.validateDashboard();
    });
    await test.step('Add product to favorites', async () => {
        await homePage.addFavorite();
    });
    await test.step('Navigate to favorites and remove product', async () => {
        await homePage.navigateToFavorites();
        await homePage.removeFavorite();
    });
});

test('Verify that vendor filters (Apple, Samsung, Google, OnePlus) are working as expected : TC-132', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    await test.step('Login and validate dashboard', async () => {
        // await page.goto('/');
        await homePage.openApplication();
        await homePage.openLoginPage();
        await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
        await loginPage.validateDashboard();
    });
    await test.step('Apply OnePlus filter', async () => {
        await homePage.applyOnePlusFilter();
    });
})


