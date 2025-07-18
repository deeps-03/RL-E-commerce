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

## Getting Started with Docker

### Running with Pre-built Images from Docker Hub

This is the easiest way to run the application using pre-built Docker images. It will download the latest images from Docker Hub and run them.

*   **Frontend Image:** https://hub.docker.com/repository/docker/deepaksuresh03/rl-ecommerce-frontend/general
  
    To pull this image manually:
    ```sh
    docker pull deepsuresh03/rl-ecommerce-frontend:latest
    ```
*   **Backend Image:** https://hub.docker.com/repository/docker/deepaksuresh03/rl-ecommerce-backend/general
  
    To pull this image manually:
    ```sh
    docker pull deepsuresh03/rl-ecommerce-backend:latest
    ```

**Recommended way to run the application (both frontend and backend):**

1.  **Prerequisites:** Docker and Docker Compose must be installed.
2.  **Run the application:**
    ```sh
    docker-compose -f docker-compose.prod.yml up
    ```
    This command will automatically pull the latest images and set up the network for them to communicate.
3.  **Access the application:**
    *   Frontend: [http://localhost:8080](http://localhost:8080)
    *   Backend: [http://localhost:5001](http://localhost:5001)

### Local Development with Docker

This method is for developers who want to work on the code and see their changes live.

1.  **Prerequisites:** Docker and Docker Compose must be installed.
2.  **Run the application:**
    ```sh
    docker-compose up --build
    ```
3.  **Access the application:**
    *   Frontend: [http://localhost:8080](http://localhost:8080)
    *   Backend: [http://localhost:5001](http://localhost:5001)

**Note on API URL:** The frontend dynamically determines the API URL. When running with Docker Compose, it uses `http://backend:3000/products`. When running manually, it defaults to `http://localhost:5001/products`.

## Manual Installation (Without Docker)

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
Built with React, Redux Toolkit, Material UI, Node.js/Express, and MongoDB Atlas
