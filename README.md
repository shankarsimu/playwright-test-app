<div align="center">

# 🎭 Playwright E-Commerce Automation Framework

<img src="https://playwright.dev/img/playwright-logo.svg" width="140"/>

### 🚀 End-to-End Test Automation Framework using Playwright + TypeScript

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

---

### 📌 Production Ready • Page Object Model • CI/CD Ready • Cross Browser

</div>

---

# 📖 Overview

This project demonstrates a **production-ready Playwright automation framework** for testing an E-Commerce application.

The framework is designed following **industry best practices**, making it scalable, maintainable, and suitable for enterprise-level automation projects.

---

# ✨ Features

✅ Page Object Model (POM)

✅ TypeScript

✅ Cross Browser Testing

✅ Parallel Execution

✅ HTML Reports

✅ Screenshot on Failure

✅ Video Recording

✅ Trace Viewer

✅ Retry Mechanism

✅ CI/CD Ready

✅ GitHub Actions Integration

✅ Modular Framework

---

# 📂 Project Structure

```text
playwright-ecommerce-framework
│
├── pages
│   ├── LoginPage.ts
│   ├── HomePage.ts
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   └── OrderPage.ts
│
├── tests
│   ├── login.spec.ts
│   ├── search.spec.ts
│   ├── cart.spec.ts
│   ├── checkout.spec.ts
│   └── ecommerce.spec.ts
│
├── utils
│   └── testData.ts
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

# 🏗 Framework Architecture

```text
                Playwright Test Runner
                         │
                         ▼
                 Test Specification
                         │
                         ▼
                Page Object Classes
                         │
                         ▼
                Utility / Test Data
                         │
                         ▼
                  Browser Interaction
                         │
                         ▼
                  E-Commerce Website
```

---

# 🛠 Tech Stack

| Technology | Version |
|------------|----------|
| Playwright | Latest |
| TypeScript | Latest |
| NodeJS | 18+ |
| Git | Latest |
| GitHub Actions | Supported |

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/shankarsimu/playwright-test-app.git
```

Go to project

```bash
cd playwright-test-app
```

Install dependencies

```bash
npm install
```

Install browsers

```bash
npx playwright install
```

---

# ▶ Run Tests

Run all tests

```bash
npx playwright test
```

Run headed mode

```bash
npx playwright test --headed
```

Run Chromium

```bash
npx playwright test --project=chromium
```

Run Firefox

```bash
npx playwright test --project=firefox
```

Run WebKit

```bash
npx playwright test --project=webkit
```

Run a single test

```bash
npx playwright test tests/ecommerce.spec.ts
```

---

# 📊 Reports

Generate HTML Report

```bash
npx playwright show-report
```

Playwright automatically generates

- HTML Report
- Screenshots
- Videos
- Trace Files

---

# 📋 Test Scenarios

| Scenario | Status |
|----------|--------|
| Login | ✅ |
| Invalid Login | ✅ |
| Logout | ✅ |
| Product Search | ✅ |
| Product Filter | ✅ |
| Product Sorting | ✅ |
| Add Product to Cart | ✅ |
| Remove Product | ✅ |
| Update Quantity | ✅ |
| Checkout | ✅ |
| Payment Flow | ✅ |
| Order Confirmation | ✅ |

---

# 🔄 End-to-End Flow

```text
Launch Browser
      │
      ▼
Open Application
      │
      ▼
Login
      │
      ▼
Search Product
      │
      ▼
Select Product
      │
      ▼
Add to Cart
      │
      ▼
Checkout
      │
      ▼
Enter User Details
      │
      ▼
Payment
      │
      ▼
Order Confirmation
      │
      ▼
Logout
```
 

---

# ⚙ Configuration

Framework configuration is available in

```
playwright.config.ts
```

Features

- Base URL
- Retry Count
- Browser Selection
- Video Recording
- Screenshot Capture
- HTML Reports
- Parallel Execution

---

# 🔥 Best Practices Used

✔ Page Object Model

✔ Reusable Components

✔ Separate Test Data

✔ Modular Design

✔ Explicit Assertions

✔ Reusable Utility Functions

✔ Maintainable Code Structure

✔ CI/CD Integration

---

# 🚀 CI/CD

GitHub Actions supported.

Workflow includes

- Install Dependencies
- Install Browsers
- Run Tests
- Upload Reports
- Archive Artifacts

---

# 📈 Future Enhancements

- API Testing
- Database Validation
- Docker Support
- Jenkins Pipeline
- Azure DevOps Pipeline
- Slack Notifications
- Allure Reporting
- Data Driven Testing
- Multi Environment Support

---

# 👨‍💻 Author

**Shankar Simu**

DevOps Engineer | QA Automation Engineer | Cloud Enthusiast

GitHub

https://github.com/shankarsimu

---

# ⭐ Support

If you like this project,

⭐ Star this repository

🍴 Fork it

💡 Contribute improvements

---

<div align="center">

## ⭐ Happy Testing ⭐

Made with ❤️ using Playwright

</div>