import { Page } from '@playwright/test';

export class LoginPage {
  // Constructor receives Playwright page object
  constructor(private page: Page) {}

  // Navigate to login page
  async goto() {
    await this.page.goto(
      'https://192.168.50.51/clarity/home/index.html#/login'
    );
  }

  // Perform login action
  async login(username: string, password: string) {

    // Fill username
    await this.page
      .getByRole('textbox', { name: 'Username *' })
      .fill(username);

    // Fill password
    await this.page
      .getByRole('textbox', { name: 'Password' })
      .fill(password);

    // Click login button
    await this.page
      .getByRole('button', { name: 'Login' })
      .click();

    // Wait for loading overlay to disappear
    await this.page.waitForSelector('#overlay', {
      state: 'hidden',
      timeout: 30000,
    });
  }
}