# Hyang Project Documentation

## Project overview

Hyang is a web portal for operating and governing a data lakehouse. It brings data source and pipeline operations, metadata and data governance, data quality, reporting, user administration, and operational evidence into one interface. The portal is designed to work with services such as Apache Airflow, Apache Hop, Apache NiFi, OpenMetadata, Trino, MinIO, Superset, Ranger, and Keycloak.

The repository contains two independently runnable applications:

| Directory | Responsibility |
| --- | --- |
| `hyang-fe/` | Single-page web application and user interface |
| `hyang-be/` | HTTP API, authentication, portal data storage, and integrations with external tools |

The root `docker-compose.yml` runs both apps for local development. It starts the backend on port `10017` and the Vite frontend on port `5173`; the frontend waits for the backend health check.

## Technology stack

### Frontend (`hyang-fe`)

- **React 18** builds the component-based user interface.
- **Vite 6** runs the development server and creates production builds.
- **JavaScript and JSX** are used for most application code; TypeScript is included for type checking and configuration support.
- **React Router 6** defines the portal's page routes, with lazy-loaded feature pages.
- **Tailwind CSS 3** provides utility styling. The project also uses Radix UI primitives and class-variance-authority for reusable interface components.
- **TanStack React Query 5** is available for asynchronous server state; Axios is the HTTP client used by the API layer.
- **Recharts**, **Leaflet**, **Three.js**, and other UI libraries support charts and specialized visual elements.
- **ESLint** and **Prettier** support code quality and formatting.

The frontend can load deployment settings from `public/runtime-config.json` at runtime, including API paths, backend mode, and external tool console URLs. See `hyang-fe/docs/environment-variables.md` for configuration details.

### Backend (`hyang-be`)

- **Node.js 22** is the runtime used in the root Compose setup.
- **Fastify 5** serves the REST API, with CORS and multipart plugins.
- **Prisma 6** provides database access and schema management for **PostgreSQL**.
- **Keycloak** is used for identity and access management, including bearer-token authentication and admin operations.
- **MinIO's Node client** is included for object-storage integrations. Evidence uploads in the current API are stored on the local filesystem.
- The backend also uses native `fetch` to proxy requests to configured external services.

The backend exposes a health endpoint at `/health`; application API routes are primarily under `/api`, with tool routes under `/api/v1.0/tools`.

## Implemented product features

The frontend route registry groups the portal into these feature areas. The descriptions below reflect pages and service flows present in the code; connections to external systems still require their services and credentials to be configured.

### Overview

- **Dashboard** presents portal operational summaries, including connectors, use cases, data quality activity, and datasets.
- **Integration Health** displays connector and adapter status and provides access to configured native tool consoles.

### Data Operations

- **Data Sources** lists sources and provides a creation wizard and source detail view, including related source objects and pipelines.
- **Pipelines** provides pipeline listings, details, and a designer, with pipeline/run records represented in the portal data model.
- **Backend Workspaces** provides tool-specific workspaces for Airflow, Apache Hop, NiFi, Dremio, OpenMetadata, MinIO, and Keycloak.
- **Medallion** organizes datasets by data layer and includes dataset details and promotion flows.
- **Data Quality** includes quality overview, rule creation and listing, execution history, and issue listings.

### Governance

- **Catalog** and asset detail pages for data assets.
- **Glossary** pages for business terms, term details, and glossary import workflows.
- **Explore** pages for discovering data and viewing table details.
- **Lineage** and **Impact Analysis** pages for tracing dependencies and assessing downstream impact.
- Access-control pages are present for requests, policies, roles, and audit activity; the current navigation configuration hides this section's governance menu entry, while the routes remain registered.

### Consumption

- **Query & OLAP** hub with pages for BI datasets, dashboards, and connections.

### Operations Assurance

- **Data Products** lists use cases and provides use case detail and operational journey flows.
- **Evidence Center** lists UAT evidence and defects, and supports evidence-related updates and defect recording.
- **Knowledge Base** contains documentation, SOP, training, and license pages.
- **Service Operations** contains support, ticket, health-check, and maintenance pages.

### Administration

- **Connectors**, **Credentials**, and **Settings** pages for portal configuration.
- **Access Policies** and **User Management** pages with permission-gated navigation.
- **Profile Management** and **Audit Log** pages.

### Backend capabilities

- **Portal entity API:** authenticated CRUD, filtering, bulk operations, and schema inspection for 25 portal entity types, including datasets, connectors, pipelines, quality rules and executions, glossary terms, access requests, audit logs, evidence, and use cases. These portal records use a JSON-backed Prisma `PortalRecord` model and generated entity schemas.
- **Authentication:** login, current-user, refresh, and logout endpoints, plus Keycloak-backed token validation and user administration support.
- **Request protection:** signed-request verification, CORS allow-listing, role/authorization middleware, and authenticated API routes.
- **Evidence uploads:** authenticated upload and download endpoints, with a 10 MiB upload limit and a supported set of document, text, archive, and image formats.
- **Audit and time APIs:** global audit log retrieval and server time endpoint.
- **External tool routes:** registered modules for OpenMetadata, Trino, MinIO, Superset, Ranger, Apache Hop, Airflow, and Apache NiFi. These routes proxy or adapt requests and require the relevant upstream configuration.
- **Trino operations:** query, catalog, schema, table, column, and source operations are exposed through tool routes.
- **Apache Hop and Airflow:** backend services include authenticated upstream communication; Hop also lists pipeline files from its configured FileBrowser.

## Integration and implementation notes

- External tool names in the UI describe supported integration targets. A target is usable only after its URL and credentials are configured for the deployment.
- The frontend includes adapter abstractions for tools such as Dremio and Keycloak, but the backend tool registry currently registers OpenMetadata, Trino, MinIO, Superset, Ranger, Hop, Airflow, and NiFi. Check the relevant API service and deployment settings before assuming every UI adapter has a matching backend endpoint.
- The checked-in runtime configuration sets `backendMode` to `adapter` and leaves native tool URLs blank. Deployments can override this through runtime configuration.
- Evidence files currently use local filesystem storage. The backend README documents limits relevant to production and multi-instance deployments.
- Some workspace pages include portal-side views and handoffs to native tools. A page being present does not by itself mean an external platform is installed or connected.

## Running locally

The root Compose file expects `hyang-be/.env.staging` to be present and configured for the backend, including its database and authentication settings.

```bash
docker compose up
```

Then open the frontend at `http://localhost:5173`. The backend health endpoint is available at `http://localhost:10017/health`.

For application-specific scripts, configuration, deployment guidance, and API details, see the READMEs and `docs/` directories in `hyang-fe/` and `hyang-be/`.
