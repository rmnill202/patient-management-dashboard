# Patient Management Dashboard
Monorepo for a full-stack patient management dashboard application, allowing providers to view, manage and edit patient information.

## Prerequisites
- `Bun` for backend
- `Node.js` for frontend
- `Docker` and `docker-compose` for database

## Repo Breakdown
This app is broken down into three separate pieces, each of which with their own setup and development steps. 
1. `patient-dash-backend` - Backend API running on Bun
2. `patient-dash-client` - Frontend SPA built on Vite, runs with Node.js
3. `db` - Just a simple docker-compose config file for running the database locally

## Setup
Refer to each repo's readme file for details! There will be values that need to be copied between them (such as port and DB credentials).

