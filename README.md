# Welcome to Unith Assignment

This app was created using React and Redux for the front end and Node.js and Express for the back end.

I've added backend API to the project, so if the original API (http://54.73.73.228:4369/api/images) won't work, you can
fetch data from the local server. Also, the parts of the app can be running separately, so you can run the backend and
frontend
on different instances. Or by using the recommended way with Docker.

# Running with Docker

This app can be run using Docker for easier environment setup.

## Prerequisites

- Docker
- Docker Compose

## Build Images

Build the Docker images:

```bash
docker compose build
```

This will build the necessary images for the front-end, back-end, and database.

## Start Containers

Once images are built, start the containers:

```bash
docker compose up
```

This will start the front-end, back-end, and database containers.

The app will be available on http://localhost:3000.

The back-end API will be at http://localhost:3001.

## Stop Containers

To stop the containers, run:

```bash
docker compose down
```

This will stop and remove the containers.

Let me know if you need any clarification or have additional questions!

# Running without Docker

Navigate to each directory (front-end & server) of the project and run the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

This will start the front-end, back-end.

# Running unit tests

On the front end, I covered redux with unit tests. To run them, navigate to the front-end directory and run the
following command:

```bash
npm run test
# or
yarn test
# or
pnpm test
```