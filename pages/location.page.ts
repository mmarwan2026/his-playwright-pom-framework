import { Page } from '@playwright/test';

export class LocationPage {

  constructor(private page: Page) {}

  // Select hospital/location
  async selectLocation() {

    // Select location from dropdown
    await this.page.selectOption(
      '#location',
      'object:30'
    );

    // Continue to system
    await this.page
      .getByRole('button', { name: 'Continue' })
      .click();
  }
}