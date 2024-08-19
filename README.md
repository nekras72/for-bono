# Bono Project

This is a Next.js project for "Bono" that is set up to run in a Docker container.

## Prerequisites

-   Docker
-   Docker Compose (optional)

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd bono
```

### 2. Running the Project

You can run the project using Docker.

```bash
docker build -t bono-app .
docker run -p 3000:3000 bono-app
```

### 3. Access the Application

Once the application is running, you can access it at http://localhost:3000.

## Development

To develop locally without Docker, run:

```bash
npm run dev
```

## Building and Starting

To build and start the application in production mode:

```bash
npm run build
npm start
```

## Technologies Used

-   Next.js 14.2.5
-   React 18
-   Material UI
-   TypeScript

This setup uses npm for dependency management and should work seamlessly with your project. Let me know if you need any more adjustments!
