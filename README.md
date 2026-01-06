# RL E-commerce Project

## Overview
A full-stack e-commerce application using React (Vite + TypeScript), Redux Toolkit, Material UI, Node.js/Express, and MongoDB.

## Features
- Home, Products, and Cart pages
- Add/remove/increment/decrement products in cart
- Responsive Material UI design
- State management with Redux Toolkit
- Backend API with Node.js/Express
- MongoDB for product storage

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

## Database Configuration

This project can be configured to use either a local MongoDB instance running in Docker or a cloud-hosted MongoDB Atlas instance.

### Case 1: Local MongoDB with Docker (Recommended for Development)

The `docker-compose.yml` file is pre-configured to create a local, self-contained development environment. This is the simplest way to get started.

- **How it works:** A `mongo` service is defined in the `docker-compose.yml` file. The `backend` service is configured to connect to it automatically using the hostname `mongo`.
- **Data Persistence:** Product data is stored in a Docker volume named `mongo-data`, so it persists even after you stop and remove the containers.
- **Setup:** No extra steps are needed. Just run `docker-compose up`.

### Case 2: Cloud MongoDB with Atlas (For Production or Manual Setup)

If you prefer to use a cloud-hosted database, you can connect the backend to a MongoDB Atlas instance.

1.  **Create a `.env` file** in the `/backend` directory.
2.  **Add your Atlas URI** to the file. This URI is provided by MongoDB Atlas and contains your credentials and cluster address.
    ```env
    # backend/.env
    MONGODB_URI=your-mongodb-atlas-uri
    ```
3.  **Whitelist Your IP Address:** For the backend to connect, you must add your computer's IP address to the IP Access List in your MongoDB Atlas project settings. If you are running the backend inside a Docker container, you may need to whitelist the IP address of your network or `0.0.0.0/0` for testing (be aware of the security implications).

When the `MONGODB_URI` environment variable is present in a `.env` file, the application will prioritize it over the local Docker database connection.

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
1. In the `backend/` folder, create a `.env` file with your MongoDB Atlas URI (see "Database Configuration" section above).
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
To add sample products to either your local or Atlas database, run the seed script from within the `backend` directory:
```sh
# If using Docker:
docker compose exec backend node seed.js

# If running manually:
cd backend
node seed.js
```

## Project Structure
- `/src` — React frontend code
- `/public` — Static assets
- `/backend` — Node.js/Express API and MongoDB models

---

## Credits
Built with React, Redux Toolkit, Material UI, Node.js/Express, and MongoDB
