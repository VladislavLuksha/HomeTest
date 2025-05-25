# 🧪 HomeTest Automation Framework

Automation framework using **Playwright** for UI and **Supertest** for API testing.

---

## 🔍 Features

- ✅ UI Testing with Playwright (`saucedemo.com`)
- ✅ API Testing with Supertest (`airportgap.com`)
- ✅ Page Object Model for UI
- ✅ Services & Endpoints for API
- ✅ Environment config via `.env`
- ✅ Allure reporting
- ✅ ESLint + Prettier integration
- ✅ TypeScript + ts-node
- ✅ Unified UI & API test runner

---

## 📦 Installation

```bash
git clone https://github.com/VladislavLuksha/HomeTest.git
cd HomeTest
npm install
```

---

## ⚙️ Configuration

Add your credentials to `.env`:

```
USERNAME=
PASSWORD=
```
---

## 🚀 Running Tests

### ▶ UI Tests (Playwright)

```bash
npm run test:ui
```

### ▶ API Tests (Supertest + Mocha + Chai)

```bash
npm run test:api
```

### ▶ All Tests

```bash
npm run test:all
```

---

## 📊 Allure Reporting

### Generate report:

```bash
npm run report:generate
```

### Open report:

```bash
npm run report:open
```

---

## 🧹 Code Quality

### Lint check:

```bash
npm run lint
```

### Auto-format:

```bash
npm run format
```

---

## 📁 Project Structure

```
├── config/
│   └── config.ts
├── src/
│   ├── api/          # Endpoints & request wrapper
│   ├── helpers/      # Common helper functions
│   ├── pages/        # Playwright page objects
│   ├── services/     # API logic
│   └── types/        # TypeScript interfaces
├── test/
│   └── specs/
│       ├── api/      # API tests (Mocha)
│       └── ui/       # UI tests (Playwright)
```

---

## 📌 Tech Stack

- **Playwright**
- **Supertest**
- **Mocha + Chai**
- **TypeScript**
- **Allure Reporter**
- **ESLint + Prettier**