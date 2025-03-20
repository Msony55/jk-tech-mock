# Ingestion Control

A NestJS-based application for managing document ingestion processes with Redis integration.

## Features

- **Trigger Ingestion**: Start the ingestion process for a document.
- **Check Ingestion Status**: Retrieve the current status of a document's ingestion process.
- **Mock Embedding**: Fetch mock embedding data for a document.
- **Redis Integration**: Uses Redis for managing ingestion states.

## Project Structure

```
├── src
│   ├── app.module.ts                  # Main application module
│   ├── main.ts                        # Application entry point
│   ├── core
│   │   └── redis
│   │       ├── redis.module.ts        # Redis module
│   │       └── redis.service.ts       # Redis service
│   └── mock-ingestion
│       ├── mock-ingestion.controller.ts # Controller for ingestion endpoints
│       ├── mock-ingestion.service.ts    # Service for ingestion logic
│       └── mock-ingestion.module.ts     # Module for ingestion feature
├── test
│   ├── app.e2e-spec.ts                # End-to-end tests
│   └── jest-e2e.json                  # Jest configuration for e2e tests
├── README.md                          # Project documentation
├── package.json                       # Node.js dependencies and scripts
├── tsconfig.json                      # TypeScript configuration
├── .eslintrc.js                       # ESLint configuration
└── .prettierrc                        # Prettier configuration
```
---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ingestion-control

2. Install dependencies:
  ```bash
  npm install

3. Running the Application
  Development Mode
  ```bash
  npm run start:dev

### API Endpoints

## Base URL
```bash
  http://localhost:3000
```
## Endpoints
1. Trigger Ingestion: ``` POST /ingestion/trigger/:documentId ```
2. Get Ingestion Status: ``` GET /ingestion/status/:documentId ```
3. Get Mock Embedding:  ``` GET /ingestion/embedding/:documentId ```

## Testing

Unit Tests
``` npm run test ```

## Environment Variables

1. PORT: Port for the application (default: 3000)
2. REDIS_HOST: Redis server host (default: localhost)
3. REDIS_PORT: Redis server port (default: 6379)
