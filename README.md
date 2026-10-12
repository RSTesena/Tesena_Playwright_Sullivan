Sullivan TESENA
Playwright E2E Tests - PrestaShop
Automated E2E tests for the PrestaShop demo application using Playwright and TypeScript.

Project Overview
This project demonstrates modern UI test automation using:

Playwright
TypeScript
Action-Based Pattern
Environment configuration via .env
HTML reporting
GitHub Actions CI pipeline
Target application:

https://prestashop.tesena.com/cs/
---------------------------------------------------------
Prerequisites
Node.js 20+
npm
Verify installation:

node -v
npm -v
---------------------------------------------------------
Installation
Install project dependencies:

npm install
Install Playwright browsers:

npx playwright install
---------------------------------------------------------
Running Tests
Run all tests:

npm test
Run tests with UI mode:

npm run test:ui
Run tests in headed mode:

npm run test:headed
Run a specific test:

npx playwright test tests/search-product.spec.ts
---------------------------------------------------------
  GitHub_Pipeline.yaml is not an executable but as part of the assitgment
