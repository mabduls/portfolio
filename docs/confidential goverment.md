# Project Overview

This repository contains a multi-service border monitoring and situational awareness system. It combines a web application, a general-purpose backend API, and data services for air traffic. The user interface brings together land border sensors, air traffic information, alerting, maps, analytics, and reports.

This overview describes what is present in the repository. Whether a screen receives live operational data depends on its configured backend and external systems; some pages use demonstration data.

## Repository layout

| Directory                                   | Role                                                                                      |
| ------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Frontend service | Web client and its development web server. |
| Backend service | Main API for land border, partner integrations, alerts, reports, and air border features. |
| [`spire-serve/`](spire-serve/)             | Spire aircraft stream and alert processing service, with a separate REST API process.     |
| [`tower-serve/`](tower-serve/)             | Related tower data service, including raw tower data ingestion.                           |
| [`docker-compose.yml`](docker-compose.yml) | Local development setup for the frontend and backend services. |

The backend services are separate processes. The frontend calls APIs and stream endpoints exposed by those services; the main backend also integrates with partner systems and databases. Spire and tower services provide specialized air traffic feeds and processing.

## Technology by service

### Frontend service — web application

- JavaScript with Vue 3 single-file components.
- Vite 7 for development and production builds; Vue Router 4 for navigation.
- Pinia for shared state.
- Tailwind CSS and Element Plus for styling and UI components.
- Fastify 5 is also used by `server.js` for serving/proxying the built application.
- Mapping and geospatial libraries include OpenLayers, MapLibre GL, Mapbox GL, and Turf.
- Charts and reports use Chart.js, ECharts, ApexCharts, and PDF/CSV/DOCX export libraries.
- Keycloak JS is used for authentication; Axios and browser fetch clients communicate with APIs.

### Backend service — main API

- Node.js and JavaScript (CommonJS), with Fastify 5.
- Prisma 6 and PostgreSQL for database access.
- Fastify plugins provide CORS, HTTP proxying, multipart uploads, static files, Swagger/OpenAPI, and WebSocket support.
- KafkaJS and Avro (`avsc`) support partner event streams; WebSocket clients are also used for real-time integrations.
- Winston provides application logging; environment-specific configuration selects the app and deployment environment.
- Modular feature areas are registered from `src/modules/` and app entry points live in `apps/`.

### `spire-serve` — Spire stream and API

- Node.js and JavaScript (CommonJS), with Fastify 5.
- Prisma 7 and PostgreSQL.
- KafkaJS, with Snappy compression support, for event/alert integrations.
- Fastify WebSocket and Server-Sent Events (SSE) endpoints for live aircraft and alert delivery.
- Swagger/OpenAPI documents the separate REST API process; Winston handles logging.
- `serve.js` starts the streaming/alert service. `api.js` starts a separate REST API process.

### Related service: `tower-serve`

`tower-serve` is a neighboring Node.js/Fastify service for tower data. Its package manifest includes PostgreSQL access through `pg`, gRPC support, and Fastify WebSocket/API plugins. It is included in the repository but is not one of the three services requested in detail above.

## Features implemented in the repository

### Web client

- Login, authenticated navigation, domain-aware access checks, and a module landing page.
- Dashboard views with a map and latest alerts.
- Land border and multi-sensor screens for CCTV, radio-frequency monitoring, digital barriers, sensor alerts, and reports.
- AI-oriented screens for facial recognition, license-plate recognition, abnormal-event detection, behavior analysis, and crowd monitoring.
- Alert and anomaly views for air monitoring, earthquakes, geospatial events, radio frequency, surveillance, thermal alerts, and Vega alerts.
- Air border map and data views, with navigation for inbound/outbound flights, bypass traffic, aircraft/ADS-B, airports, radar, high-risk countries, alerts, and reports.
- Map tools and data layers for areas of interest, boundaries, mountains, weather, navigation charts, and aircraft filtering.
- Analytics, report, API-management, and export-oriented screens.

The ADS-B overview page currently imports its displayed report, analytics, leaderboard, aircraft list, and alert data from `adsbDummy.js`. Other views may also depend on external APIs or partner availability, so the presence of a screen does not by itself mean its live data source is configured.

### Backend API

- Land border modules for CCTV, PLBN/location information, radio devices, and sensor streams.
- Partner integration modules for HIK, MID, NST, Vega, Vidya, Wisdom, digital barriers, and related tunnel/monitoring services.
- Air border alert and weather modules, plus air traffic integrations for Spire and FlightAware.
- Alert, report, and API-management endpoints.
- Prisma-backed models and migrations for sensor/location data and other application records.
- Fastify server bootstrap, environment-based app entry points, API documentation plugins, and graceful shutdown handling.

### `spire-serve`

- Live aircraft data streaming, including raw and condensed position feeds, history retrieval, and alert SSE feeds.
- Spire upstream proxying and aircraft/airline enrichment using local reference data and caches.
- Alert processing modules for bypass and foreign aircraft, high-risk areas, military aircraft, squawk codes, target-lost events, tower raw data, vertical rate, and top-airport/top-airline conditions.
- REST API modules for aircraft, airlines, airports, flight sessions, reports, statistics, summaries, mountain data, chart indices, polygon boundaries, and alert-related data.
- HMAC request-signature middleware and health endpoints.

These lists describe feature code and routes in the repository. Availability of a particular feature in a deployment can depend on environment configuration, credentials, databases, Kafka topics, and connected sensor or provider systems.

## Local development

The root `docker-compose.yml` starts the frontend dev server and the main backend API. It expects the backend's environment configuration and service dependencies to be available. It publishes the frontend on port `5173` and the backend on port `10002` in the compose file.

For the frontend service, run from its directory:

```sh
npm install
npm run dev
```

For the backend service, run from its directory:

```sh
npm install
npm run dev
```

Spire has independent streaming and API entry points; see its package scripts and [`spire-serve/docs/PROJECT_STRUCTURE.md`](spire-serve/docs/PROJECT_STRUCTURE.md) for its environment-specific commands and architecture. Configure service environment files and external dependencies for your own development environment before starting backend services.

## Further documentation

- The backend service README — main backend structure, scripts, database, and logging.
- [`spire-serve/docs/`](spire-serve/docs/) — Spire API endpoint references and implementation notes.
- [`tower-serve/docs/`](tower-serve/docs/) — tower API documentation.
