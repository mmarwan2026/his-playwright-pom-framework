# HIS Playwright Automation Framework

Playwright TypeScript automation framework using the Page Object Model (POM) design pattern for end-to-end testing of the HIS application.

---

## Features

- Playwright with TypeScript
- Page Object Model (POM) architecture
- Reusable page classes and utilities
- Automated UI test cases
- GitHub Actions CI integration
- HTML Playwright reporting
- Screenshot and trace support

---

## Project Structure

```text
├── .github/workflows      # GitHub Actions CI pipeline
├── pages                  # Page Object classes
├── tests                  # Test specifications
├── test-data              # Test data files
├── screenshots            # Captured screenshots
├── utils                  # Utility/helper functions
├── playwright-report      # Generated test reports
├── test-results           # Test execution results
├── playwright.config.ts   # Playwright configuration
└── package.json

---

---

## ⚙️ Installation

1. Clone the repository

```bash
git clone https://github.com/mmarwan2026/his-playwright-pom-framework.git

Navigate to project folder
cd his-playwright-pom-framework
Install dependencies
npm install
Install Playwright browsers
npx playwright install
▶️ Run Tests

Run all tests:

npx playwright test

Run tests in headed mode:

npx playwright test --headed

Run a specific test file:

npx playwright test tests/validlogin.spec.ts
