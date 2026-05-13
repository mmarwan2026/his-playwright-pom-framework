import { expect, Page } from '@playwright/test';

export class RegistrationPage {

  constructor(private page: Page) {}

  // Open Add New Patient page
  async openAddPatient() {

    // Open registration menu
    await this.page
      .getByRole('link', { name: 'Registration' })
      .click();

    // Click Add New Patient
    await this.page
      .locator('a', { hasText: 'Add New Patient' })
      .click();
  }

  // Fill patient main information
  async fillPatientInfo(data: any) {

    // ---------------- ENGLISH NAMES ----------------

    await this.page
      .getByRole('textbox', { name: /first name/i })
      .fill(data.firstName);

    await this.page
      .getByRole('textbox', { name: /middle name/i })
      .fill(data.middleName);

    await this.page
      .getByRole('textbox', { name: /last name/i })
      .fill(data.lastName);

    // ---------------- ARABIC NAMES ----------------

    await this.page
      .getByPlaceholder('First Name in Arabic')
      .fill(data.arabicFirst);

    await this.page
      .getByPlaceholder('Middle Name in Arabic')
      .fill(data.arabicMiddle);

    await this.page
      .getByPlaceholder('Last Name in Arabic')
      .fill(data.arabicLast);

    // ---------------- DROPDOWNS ----------------

    await this.page
      .getByLabel('Gender *')
      .selectOption('M');

    await this.page
      .getByLabel('Religion : *')
      .selectOption({ index: 1 });

    await this.page
      .getByLabel('Marital Status : *')
      .selectOption({ index: 1 });

    await this.page
      .getByLabel('Nationality : *')
      .selectOption({ index: 1 });

    // ---------------- AGE ----------------

    // Years
    await this.page
      .getByRole('spinbutton', { name: 'Age *' })
      .fill('47');

    // Months
    await this.page
      .getByRole('spinbutton')
      .nth(1)
      .fill('0');

    // Days
    await this.page
      .getByRole('spinbutton')
      .nth(2)
      .fill('0');

    // ---------------- BIRTH TIME ----------------

    await this.page
      .getByRole('textbox', { name: 'Birth Time' })
      .fill('10:10');

    // ---------------- STATE/CITY ----------------

    // Search for city
    await this.page
      .getByRole('textbox', { name: 'State' })
      .fill('القا');

    // Select Cairo
    await this.page.getByText('القاهرة').click();

    // ---------------- ADDRESS ----------------

    await this.page
      .getByRole('textbox', { name: 'Address Line 1' })
      .fill('Address-1');

    await this.page
      .getByRole('textbox', { name: 'Address Line 2' })
      .fill('Address-2');

    // ---------------- IDS ----------------

    await this.page
      .locator('[id="National ID"]')
      .first()
      .fill(data.nationalId);

    await this.page
      .locator('[id="Passport Number"]')
      .first()
      .fill(data.passport);
  }

  // Fill additional patient info
  async fillAdditionalInfo(data: any) {

    // Open additional info section
    await this.page
      .getByRole('link', {
        name: 'Additional Patient Information',
      })
      .click();

    // Fill email
    await this.page
      .getByRole('textbox', {
        name: 'Email Address',
      })
      .fill(data.email);

    // Fill phone
    await this.page
      .getByRole('textbox', {
        name: 'Phone Number',
        exact: true,
      })
      .fill(data.phone);

    // Fill alternate phone
    await this.page
      .getByRole('textbox', {
        name: 'Alternate Phone Number',
      })
      .fill('+02355555555');
  }

  // Fill insurance information
  async fillInsuranceInfo(data: any) {

    // Open insurance section
    await this.page
      .getByRole('link', {
        name: 'Insurance Information',
      })
      .click();

    // Insurance provider
    await this.page
      .getByRole('textbox', {
        name: 'Insurance Provider',
      })
      .fill(data.provider);

    // Insurance number
    await this.page
      .getByRole('textbox', {
        name: 'Insurance Number',
      })
      .fill(data.insuranceNumber);

    // Insurance plan
    await this.page
      .getByRole('textbox', {
        name: 'Insurance Class/Plan',
      })
      .fill(data.plan);

    // Expiry date
    await this.page
      .getByRole('textbox', {
        name: 'Insurance Expiry Date',
      })
      .fill('2030-05-30');

    // Upload insurance card image
    await this.page.setInputFiles(
      'input[type="file"]',
      'uploads/insurance_Card.jpg'
    );
  }

  // Save patient
  async savePatient() {

    // Small wait for stability
    await this.page.waitForTimeout(2000);

    // Click save
    await this.page
      .getByRole('button', { name: 'Save' })
      .click();

    // Validate confirmation popup
    await expect(
      this.page.locator(
        'div:nth-child(2) > .messages > ul > li > .message-container > .message-text > div'
      )
    ).toBeVisible();

    // Confirm save again
    await this.page
      .getByRole('button', { name: 'Save' })
      .click();

    // Validate saved message
    await expect(
      this.page.locator('#view-content')
    ).toContainText('Saved');
  }

  // Generate patient activation code
  async generateActivationCode() {

    // Open activation dialog
    await this.page
      .getByRole('button', {
        name: 'Generate Activation Code',
      })
      .click();

    // Validate popup visible
    await expect(
      this.page
        .locator('div')
        .filter({
          hasText: 'Patient Portal Activation',
        })
        .nth(1)
    ).toBeVisible();

    // Generate code
    await this.page
      .getByRole('button', {
        name: 'Generate Code',
      })
      .click();

    // Wait for generation
    await this.page.waitForTimeout(2000);

    // Take screenshot
    await this.page.screenshot({
      path: 'screenshots/screenshot.png',
    });

    // Close popup
    await this.page
      .getByRole('button', { name: 'Close' })
      .click();
  }
}