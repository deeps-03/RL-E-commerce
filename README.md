# RL E-commerce Project

## Overview
A full-stack e-commerce application using React (Vite + TypeScript), Redux Toolkit, Material UI, Node.js/Express, and MongoDB Atlas.

## Features
- Home, Products, and Cart pages
- Add/remove/increment/decrement products in cart
- Responsive Material UI design
- State management with Redux Toolkit
- Backend API with Node.js/Express
- MongoDB Atlas for product storage

## Getting Started

### 1. Frontend
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Backend
1. In the `backend/` folder, create a `.env` file with your MongoDB Atlas URI:
   ```env
   MONGODB_URI=your-mongodb-atlas-uri
   ```
2. Install backend dependencies:
   ```sh
   cd backend
   npm install
   ```
3. Start the backend server:
   ```sh
   node server.js
   ```
4. The backend runs on [http://localhost:5001](http://localhost:5001)

### 3. Seed the Database
1. To add sample products, run:
   ```sh
   cd backend
   node seed.js
   ```

## Project Structure
- `/src` — React frontend code
- `/public` — Static assets
- `/backend` — Node.js/Express API and MongoDB models

---

## Credits
Built with React, Redux Toolkit, Material UI, Node.js/Express, and MongoDB Atlas.
