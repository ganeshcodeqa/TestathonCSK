import { expect } from "@playwright/test";
import { dashboardConfig } from "../configs/page-config";

export class LoginPage {

    constructor(page) {
        this.page = page;
    };

    async login(username, password) {
        console.log(`Attempting login with username: ${username}`);
        await this.page.locator('div').filter({ hasText: /^Select Username$/ }).nth(2).click();
        await this.page.getByText(username, { exact: true }).click();
        console.log(`Username ${username} selected`);
        await this.page.getByText('Select Password').click();
        await this.page.getByText(password, { exact: true }).click();
        console.log(`Password ${password} selected`);
        await this.page.getByRole('button', { name: 'Log In' }).click();
        console.log('Login button clicked');
    };

    async validateDashboard() {
        await expect(this.page).toHaveURL(`${process.env.URL}${dashboardConfig.URL}`);
        console.log('Successfully navigated to Dashboard page');
    }

    async logout() {
        await this.page.getByRole('link', { name: 'Logout' }).click();
        console.log('Logout button clicked');
    }






};
