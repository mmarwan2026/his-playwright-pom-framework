import { test } from '@playwright/test';

import { LoginPage } from '../pages/login.page';
import { LocationPage } from '../pages/location.page';
import { RegistrationPage } from '../pages/registration.page';

import {
  randomEmail,
  randomName,
  randomNumber,
  randomPhone,
  randomString,
} from '../utils/random-data';

test('full patient flow - random data', async ({ page }) => {

  // Increase test timeout
  test.setTimeout(120000);

  // ---------------- PAGE OBJECTS ----------------

  const loginPage = new LoginPage(page);

  const locationPage = new LocationPage(page);

  const registrationPage =
    new RegistrationPage(page);

  // ---------------- RANDOM DATA ----------------

  const name = randomName();

  const patientData = {
    firstName: name.first,
    middleName: name.middle,
    lastName: name.last,

    arabicFirst: 'ياسر',
    arabicMiddle: '',
    arabicLast: 'على',

    email: randomEmail(),

    phone: randomPhone(),

    nationalId: randomNumber(10),

    passport: randomString(8),

    provider: 'Provider-' + randomString(),

    insuranceNumber: randomNumber(9),

    plan: 'Plan-' + randomString(),
  };

  // ---------------- LOGIN ----------------

  await loginPage.goto();

  await loginPage.login(
    'superman',
    'Admin123'
  );

  // ---------------- LOCATION ----------------

  await locationPage.selectLocation();

  // ---------------- REGISTRATION ----------------

  await registrationPage.openAddPatient();

  await registrationPage.fillPatientInfo(
    patientData
  );

  // ---------------- ADDITIONAL INFO ----------------

  await registrationPage.fillAdditionalInfo(
    patientData
  );

  // ---------------- INSURANCE INFO ----------------

  await registrationPage.fillInsuranceInfo(
    patientData
  );

  // ---------------- SAVE PATIENT ----------------

  await registrationPage.savePatient();

  // ---------------- GENERATE ACTIVATION CODE ----------------

  await registrationPage.generateActivationCode();
});