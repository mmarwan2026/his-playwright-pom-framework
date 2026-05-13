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
```
## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/nmarwan2026/his-playwright-pom-framework.git
```

---

### 2. Navigate to Project Folder

```bash
cd his-playwright-pom-framework
```

---

### 3. Install Dependencies

```bash
npm install
```

---

### 4. Install Playwright Browsers

```bash
npx playwright install
```

---

### 5. Run All Tests

```bash
npx playwright test
```

---

### 6. Run Tests in Headed Mode

```bash
npx playwright test --headed
```

---

### 7. Run Specific Test File

```bash
npx playwright test tests/patient-flow.spec.ts
```

---

### 8. Show HTML Report

```bash
npx playwright show-report
```
