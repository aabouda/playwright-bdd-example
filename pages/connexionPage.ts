
import { Page } from 'playwright';

export class connexionPage {
    readonly page: Page;
    readonly usernameInputSelector = '#user';
    readonly passwordInputSelector = '#password';
    readonly loginButtonSelector = '#ok';


    constructor(page: Page) {
        this.page = page;
    }

    async login(username: string, password: string) {
        await this.page.waitForSelector(this.usernameInputSelector, { state: 'visible', timeout: 60000 });
        await this.page.fill(this.usernameInputSelector, username, { timeout: 60000 });
        await this.page.fill(this.passwordInputSelector, password, { timeout: 60000 });
        await this.page.click(this.loginButtonSelector);
    }
}