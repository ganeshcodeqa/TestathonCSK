# Playwright Testathon ChapterLeads 2025 🎭

[![Playwright Tests](https://img.shields.io/badge/Playwright-Tests-green.svg)](https://playwright.dev/)
[![BrowserStack](https://img.shields.io/badge/BrowserStack-Enabled-orange.svg)](https://browserstack.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-brightgreen.svg)](https://nodejs.org/)

This project contains automated test scripts for the **Playwright Testathon ChapterLeads 2025** event. It includes comprehensive end-to-end test automation using Playwright framework with BrowserStack integration for cross-browser testing.

## 🔗 BrowserStack Test Management

View test insights and reports: [BrowserStack Test Management Dashboard](https://test-management.browserstack.com/projects/2389568/folder/18544723/test-cases?public_token=d09c38463cb0ff6af6abdf010f2b8f8834a9eab66c2ed1eeb31f1d1eff097b6164d3457a4e3cb9f0ad8c577c4670cc6b483d1c7f2f3a7efd4450d3a9e8998017&public_token_id=7729)

## 🏗️ Project Structure

```
📦 PLAYWRIGHT-CSK-TESTATHON-CL-2025
├── 📁 configs/                    # Configuration files
│   └── page-config.js
├── 📁 environments/               # Environment configurations
│   └── .env.automation           # Test environment variables
├── 📁 locators/                  # Element locators
├── 📁 pages/                     # Page Object Model classes
│   ├── HomePage.js
│   ├── LoginPage.js
│   ├── ProductsPage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   └── ConfirmationPage.js
├── 📁 tests/smoke/               # Smoke test suites
│   ├── LoginLogoutTest.spec.js
│   ├── CheckoutAnyIphone.spec.js
│   └── WishlistTest.spec.js
├── 📁 utils/                     # Utility modules
│   ├── json-util/
│   └── winston-logger/
├── 📁 outputs/                   # Test outputs and reports
├── 📁 log/                       # Application logs
├── 📁 playwright-report/         # HTML test reports
├── 📁 test-results/              # Test execution results
├── browserstack.yml              # BrowserStack configuration
├── playwright.config.js          # Playwright configuration
└── package.json                  # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/GaneshUma/GaneshTestathonCSK.git
   cd Ganesh_CSK
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

## ⚙️ Configuration

### Environment Configuration

The project uses environment-specific configuration files located in the `environments/` folder:

- **Default Environment**: `.env.automation`
- **Custom Environment**: Set `ENV` environment variable to load specific config (e.g., `.env.staging`)

**Example Environment Variables:**

```bash
URL=https://testathon.live
USERNAME=demouser
PASSWORD=testingisfun99
```

### BrowserStack Configuration

Configure BrowserStack settings in `browserstack.yml`:

1. **Update credentials:**

   ```yaml
   userName: YOUR_BROWSERSTACK_USERNAME
   accessKey: YOUR_BROWSERSTACK_ACCESS_KEY
   ```

2. **Or set environment variables:**
   ```bash
   export BROWSERSTACK_USERNAME=your_username
   export BROWSERSTACK_ACCESS_KEY=your_access_key
   ```

## 🧪 Test Execution

### Local Execution

**Run all tests:**

```bash
npx playwright test
```

**Run specific test file:**

```bash
npx playwright test tests/smoke/LoginLogoutTest.spec.js
```

**Run tests in headed mode:**

```bash
npx playwright test --headed
```

**Run tests with specific browser:**

```bash
npx playwright test --project=chromium
```

### BrowserStack Execution

**Run tests on BrowserStack:**

```bash
npx browserstack-node-sdk playwright test
```

**Run specific test on BrowserStack:**

```bash
npx browserstack-node-sdk playwright test tests/smoke/CheckoutAnyIphone.spec.js
```

## 📋 Test Scenarios

### Smoke Tests

1. **Login & Logout Test (TC-128, TC-129)**

   - Validates user authentication flow
   - Tests login with valid credentials
   - Verifies successful logout

2. **Checkout iPhone Product (TC-135)**

   - End-to-end checkout process
   - Product selection and cart management
   - Shipping information validation
   - Order confirmation

3. **Wishlist Functionality Test**
   - Add/remove items from wishlist
   - Wishlist persistence validation

## 📊 Test Reports

### HTML Reports

After test execution, view the HTML report:

```bash
npx playwright show-report
```

Reports are generated in:

- `playwright-report/` - HTML reports
- `test-results/` - Detailed test results
- `log/` - Application and test logs

### BrowserStack Dashboard

View test results and videos on [BrowserStack Dashboard](https://automate.browserstack.com/)

## 🛠️ Page Object Model

The project follows the **Page Object Model (POM)** design pattern:

```javascript
// Example: Using HomePage class
import { HomePage } from "../pages/HomePage";

const homePage = new HomePage(page);
await homePage.openApplication();
await homePage.openLoginPage();
```

**Available Page Classes:**

- `HomePage` - Landing page interactions
- `LoginPage` - Authentication flows
- `ProductsPage` - Product catalog operations
- `CartPage` - Shopping cart management
- `CheckoutPage` - Checkout process
- `ConfirmationPage` - Order confirmation

## 🔧 Utilities

### JSON Utilities

Located in `utils/json-util/json-util.js` for data manipulation.

### Logging

Winston logger implementation in `utils/winston-logger/logger-util.js` for structured logging.

### Test Data

Order data and test outputs stored in `outputs/orders.json`.

## 🌐 Browser Support

**Local Testing:**

- Chromium
- Firefox
- WebKit (Safari)
- Google Chrome
- Microsoft Edge

**BrowserStack Testing:**

- Windows 11 + Chrome (latest)
- Cross-browser compatibility testing
- Mobile device testing (configurable)

## 🚦 CI/CD Integration

The project is configured for CI/CD environments:

```javascript
// Playwright config for CI
retries: process.env.CI ? 2 : 0,
workers: process.env.CI ? 1 : undefined,
forbidOnly: !!process.env.CI,
```

## 🐛 Debugging

**Debug mode:**

```bash
npx playwright test --debug
```

**Trace viewer:**

```bash
npx playwright show-trace trace.zip
```

**BrowserStack debug mode:**
Enable in `browserstack.yml`:

```yaml
debug: true
networkLogs: true
consoleLogs: verbose
```

## 📝 Test Development Guidelines

1. **Follow POM pattern** - Create page classes for new pages
2. **Use test.step()** - Break tests into logical steps
3. **Environment variables** - Store sensitive data in environment files
4. **Assertions** - Use Playwright's built-in assertions
5. **Wait strategies** - Implement proper waiting mechanisms

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-test`)
3. Commit your changes (`git commit -am 'Add new test scenario'`)
4. Push to the branch (`git push origin feature/new-test`)
5. Create a Pull Request

## 📞 Support

For questions or issues:

- **Playwright Documentation**: [playwright.dev](https://playwright.dev/)
- **BrowserStack Support**: [BrowserStack Help](https://www.browserstack.com/support)

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

**Happy Testing! 🎭✨**

_Created for Playwright Posse Testathon Chennai 2025_
