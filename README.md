# Zerodha Clone

A full-stack Zerodha-inspired stock trading platform clone built using React, Node.js, Express, and MongoDB. This project replicates the core user experience of Zerodha, including authentication, portfolio management, holdings display, and a modern responsive user interface.

## 🔗 LiveLinks
* MainSite - https://zerodha-clone-1-adqq.onrender.com
* Dashboard- https://zerodha-dashboard-xkcw.onrender.com

## 🚀 Features

### Landing Page

* Modern and responsive homepage inspired by Zerodha.
* Hero section with clear call-to-action.
* Product showcase and platform highlights.
* Pricing and feature information.
* Smooth navigation between pages.

### User Authentication

* User registration (Sign Up).
* User login with email and password.
* Password hashing using bcrypt.
* JWT-based authentication.
* Secure cookie-based session management.
* Protected routes for authenticated users.

### Dashboard

* Holdings overview.
* Portfolio summary.
* Real-time profit and loss calculations.
* Interactive and responsive tables.
* Clean dashboard layout inspired by Zerodha Kite.

### Backend Features

* RESTful API architecture.
* MongoDB database integration using Mongoose.
* JWT token generation and verification.
* Authentication middleware.
* Secure password storage with bcrypt.
* Environment variable configuration using dotenv.

### Testing

* Component testing using Vitest and React Testing Library.
* UI rendering validation.
* Navigation testing.
* User interaction testing.

---

## 🛠️ Tech Stack

### Frontend

* React
* React Router DOM
* Axios
* Tailwind CSS
* Vitest
* React Testing Library

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (jsonwebtoken)
* bcryptjs
* cookie-parser
* cors
* dotenv

## ⚙️ Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## 📥 Installation

### Clone Repository

```bash
git clone <repository-url>
cd ZERODHA-CLONE
```

---

## Frontend Setup

Navigate to frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

## Backend Setup

Navigate to backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start server:

```bash
npm start
```

or

```bash
nodemon index.js
```

Backend will run on:

```text
http://localhost:3000
```

---

## Running Tests

Navigate to frontend:

```bash
cd frontend
```

Run tests:

```bash
npm run test
```

or

```bash
npx vitest
```

Example test coverage includes:

* Hero component rendering
* Button visibility
* Navigation behavior
* Form rendering
* User interaction testing

---

## Authentication Flow

```text
User Signup
      ↓
Password Hashed
      ↓
User Stored in MongoDB
      ↓
JWT Generated
      ↓
Cookie Created
      ↓
User Login
      ↓
JWT Verification
      ↓
Protected Routes Access
```

---

## Future Enhancements

* Buy/Sell stock simulation
* Real-time stock market integration
* Portfolio analytics
* Watchlist functionality
* User profile management
* Advanced authentication and authorization
* Role-based access control
* Deployment with Docker and CI/CD
* Comprehensive unit and integration testing

---

## Learning Outcomes

This project demonstrates practical experience with:

* Full Stack Development
* REST API Design
* Authentication & Authorization
* MongoDB Data Modeling
* React Component Architecture
* State Management
* API Integration
* Component Testing
* Secure Backend Development

---

## Author

**Prabhudatta Rout**

Built as a learning-focused full-stack project inspired by Zerodha to gain hands-on experience with modern web development technologies.
