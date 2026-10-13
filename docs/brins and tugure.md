# BRINS Project Documentation

## What is BRINS?

BRINS is a web application for managing operational workflows between BRINS and TUGURE. It brings together contract administration, debtor and batch processing, claims, supporting documents, and financial follow-up in one role-aware portal. The frontend and backend are maintained as two applications in this repository:

- [`tugure-brins-fe/`](tugure-brins-fe/) — browser application and user interface.
- [`tugure-brins-be/`](tugure-brins-be/) — API, workflow logic, and integrations.

The application uses the terms *batch*, *debtor*, *bordero*, *claim*, *nota*, and *subrogation* in its domain models and workflows. See the feature overview below for the user-facing areas currently present in the code.

## Architecture at a glance

```text
Browser (React / Vite)
  ├─ Keycloak login and role-aware pages
  ├─ API calls with bearer token and HMAC request signature
  └─ /api requests ──> Fastify backend
                          ├─ workflow services and entity APIs
                          ├─ PostgreSQL (pg and Prisma models)
                          ├─ MinIO or S3-compatible object storage
                          └─ Keycloak and SMTP integrations
```

In development, Vite proxies `/api` requests to the backend using `PROXY_TARGET`. Both applications have Dockerfiles for staging and production. Runtime configuration is supplied through environment variables; see the backend `.env.example`, Vite configuration, and application READMEs for setup details.

## Technology stack

### Frontend — `tugure-brins-fe`

- **JavaScript and JSX**, using **React 18** for the interface.
- **Vite 6** and `@vitejs/plugin-react` for development and production builds.
- **React Router 6** for navigation and route guards; **TanStack React Query 5** for server-state caching and data fetching.
- **Tailwind CSS 3**, Radix UI primitives, and custom shared components for styling and accessible interface elements; **Lucide React** supplies icons.
- **Keycloak JS** for authentication and role information. API helpers attach the bearer token and request-signature headers.
- Supporting libraries include **React Hook Form** and **Zod** for forms and validation, **Recharts** for charts, **PapaParse** and **XLSX** for tabular file handling, and **jsPDF/html2canvas** for document/export tasks.
- The frontend repository also contains a Prisma schema and Prisma scripts. The backend is the API service that connects to the database at runtime.

### Backend — `tugure-brins-be`

- **Node.js** with **JavaScript ES modules**.
- **Fastify 5** for the HTTP API, with Fastify plugins for route loading, CORS, multipart uploads, authentication, and database access.
- **PostgreSQL**, accessed through `pg`; the repository also includes **Prisma** models/client and schema definitions for application entities.
- **Keycloak** integration for user tokens, role-based access, token refresh/logout, password changes, and user lookup by role.
- **HMAC-SHA256 request signatures** with timestamp and UUID replay checks for API requests.
- **AWS SDK for JavaScript v3** for MinIO/S3-compatible object storage and signed download links.
- **Nodemailer** for email delivery, with environment-based SMTP settings.
- **Docker** container definitions and Podman helper scripts are present for deployment workflows.

## Features present in the code

These are the major user-facing areas and backend capabilities represented by the current pages, services, and routes. Their availability in a deployed environment can depend on the required database, identity provider, storage, and mail configuration.

### Operations and data workflows

- **Dashboard and reporting:** operational dashboards, KPI summaries, recap summaries, and advanced reports.
- **Master contracts:** contract administration, file upload/validation, approval actions, and close/invalidate actions.
- **Debtor submissions and review:** debtor submission, bulk upload and validation, duplicate checking, batch summaries, status counts, review, and batch workflow actions.
- **Batch processing:** batch listing and filtering, operational status tracking, review, and bulk debtor actions with job-status retrieval.
- **Bordero management:** bordero and associated debtor data views.
- **Claims:** claim submission, review actions, claim sequence lookup, supporting-document pages, and claim review context.
- **Subrogation:** create/upload flows and workflow actions for recovery records.
- **Financial documents and payment follow-up:** nota management, nota payment recording and bulk mark-paid actions, debit/credit note data models, payment-intent and payment-status pages, and reconciliation-related data models.
- **Document eligibility:** batch document eligibility views and filters.

### Administration and support

- **File management:** backend endpoints for upload, listing, deletion, and signed download URLs using MinIO/S3-compatible storage.
- **Notifications:** notification center and notification settings, including backend create/list/update/read/delete APIs.
- **Email workflows:** backend email sending and user lookup by BRINS/TUGURE role; workflow email templates and notification settings are represented in the application.
- **System configuration:** UI for managing system/workflow settings, notification rules, and email templates.
- **Audit and administration:** audit-log page and super-admin transaction/audit endpoints, with an admin dashboard route.
- **Authentication and access control:** Keycloak-based login/session handling, protected user pages, role-aware navigation, and a super-admin-only area.
- **Live updates:** a Server-Sent Events endpoint streams database-channel events to connected clients.

## Main domain records

The model and entity files cover records including `MasterContract`, `Contract`, `Batch`, `Debtor`, `Bordero`, `Claim`, `Subrogation`, `Nota`, `Invoice`, `Payment`, `PaymentIntent`, `Reconciliation`, `DebitCreditNote`, `Document`, `Notification`, `NotificationSetting`, `EmailTemplate`, `SlaRule`, `SystemConfig`, and `AuditLog`.

The backend includes both a generic JSON entity-record persistence layer and Prisma model definitions for domain tables. Check the active backend repository/service implementation and deployment database before assuming all entities use the same persistence path.

## Project layout

```text
brins/
├── README.md                 # This project overview
├── tugure-brins-fe/          # React/Vite frontend
│   ├── src/pages/            # Page entry points
│   ├── src/features/         # Feature-specific pages, hooks, and services
│   ├── src/components/       # Shared components and UI primitives
│   └── prisma/               # Prisma schema/migrations used by frontend scripts
└── tugure-brins-be/          # Fastify backend
    ├── src/routes/           # HTTP API routes
    ├── src/controllers/      # Request handlers
    ├── src/services/         # Domain logic and integrations
    ├── src/repositories/     # Data access
    ├── database/             # SQL schema
    └── prisma/               # Prisma schema
```

## Running locally

Install dependencies inside the application directory you want to run, then follow its README and provide the matching environment file. The backend README describes the PostgreSQL schema setup and backend start command. The frontend uses Vite; configure its API proxy target and Keycloak settings before signing in.

```bash
# Backend
cd tugure-brins-be
npm install
npm run dev

# Frontend, in a separate terminal
cd tugure-brins-fe
npm install
npm run dev
```

The backend development command expects `.env.development`; the frontend's Vite configuration reads mode-specific environment files and uses `PROXY_TARGET` for `/api` requests. Never commit real credentials or environment-specific secrets.

## Notes on implementation status

This overview describes functionality visible in the checked-in code. It does not certify that every workflow is fully enabled in a deployed environment or that external services are configured. For example, file operations require storage configuration, email requires SMTP configuration, and sign-in requires Keycloak configuration. Some library dependencies in `package.json` may not be used by the current application flows.
