# Autonomous Construction Supply Chain Brain

An AI-first hackathon project for helping construction teams predict supply risk, track material flow, and make faster site-level decisions from one operational brain.

## Overview

Construction supply chains are fragmented across procurement teams, vendors, logistics partners, warehouses, and project sites. This project creates a simple intelligence layer that can:

- monitor material demand and inventory signals,
- surface risks such as stockouts, delays, and price volatility,
- recommend next actions for procurement and site teams,
- provide a future-ready foundation for autonomous workflows.

The current repository includes:

- a `FastAPI` backend scaffold managed with `uv`,
- a `Next.js` frontend scaffold for a lightweight dashboard,
- a root-level README designed for hackathon demos, judging, and future expansion.

## Problem Statement

Construction projects often suffer from:

- late material deliveries,
- poor visibility into stock and usage,
- reactive procurement decisions,
- communication gaps between planning, sourcing, and execution,
- cost overruns caused by delays and rushed purchases.

This project aims to centralize signals from these moving parts and turn them into clear, actionable intelligence.

## Vision

Build an "autonomous supply chain brain" that can eventually reason across project plans, inventory, supplier behavior, transportation updates, and on-site progress to help teams answer:

- What materials are at risk?
- Which project activities may be delayed?
- What should be reordered now?
- Which suppliers or routes need escalation?
- What is the fastest low-risk recovery plan?

## Core Use Cases

### 1. Material Risk Monitoring

Detect materials that are likely to go out of stock or arrive late.

### 2. Procurement Decision Support

Recommend reorder timing, quantity, and vendor fallback options.

### 3. Site-to-Supply Coordination

Connect project demand with warehouse, supplier, and logistics status.

### 4. Delay Impact Intelligence

Estimate which tasks, milestones, or cost lines are affected by supply disruptions.

### 5. Executive Visibility

Give stakeholders a single dashboard for project health, supply bottlenecks, and operational alerts.

## Proposed System Architecture

The current MVP structure is intentionally simple:

- `frontend/`: Next.js dashboard for status, risks, and recommended actions
- `backend/`: FastAPI service exposing project, risk, and health endpoints
- `docs/`: architecture notes, diagrams, pitch material, and design assets

### High-Level Flow

1. Data sources provide project, supplier, and inventory context.
2. Backend normalizes those inputs into domain models.
3. Risk and recommendation logic produces alerts and actions.
4. Frontend visualizes summary metrics and operational insights.

## Diagram Placeholders

Add your diagrams/screenshots in the sections below.

### System Architecture Diagram

`[Insert architecture diagram here]`

### Data Flow Diagram

`[Insert data flow diagram here]`

### Agent / Decision Loop Diagram

`[Insert agent workflow diagram here]`

### UI Screenshots

`[Insert frontend screenshots here]`

## MVP Features

- project health overview
- material risk summary
- delayed shipment / stockout alerts
- recommended next actions
- simple API contract between frontend and backend

## Future Features

- supplier scoring
- route and lead-time prediction
- autonomous reorder agents
- natural language operations assistant
- ERP / procurement / warehouse integrations
- schedule-aware impact analysis

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- simple CSS modules / global styles

### Backend

- FastAPI
- Uvicorn
- Pydantic
- `uv` for Python environment and dependency management

## Repository Structure

```text
.
├── README.md
├── backend
│   ├── app
│   │   ├── main.py
│   │   ├── models.py
│   │   └── settings.py
│   ├── pyproject.toml
│   └── README.md
├── docs
└── frontend
    ├── app
    ├── components
    ├── lib
    ├── package.json
    ├── next.config.ts
    ├── tsconfig.json
    └── README.md
```

## Local Development

### Backend

```bash
cd backend
uv sync
uv run uvicorn app.main:app --reload
```

Backend runs on `http://127.0.0.1:8000`.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:3000`.

## API Endpoints

### `GET /health`

Basic service health check.

### `GET /api/v1/overview`

Returns demo dashboard metrics and risk insights.

## Demo Story For Judges

1. A project team opens the dashboard.
2. They immediately see high-risk materials and blocked shipments.
3. The system highlights likely schedule impact.
4. Recommended actions guide the team toward faster recovery.
5. The platform evolves from decision support into partial autonomy.

## Hackathon Positioning

This project is designed to showcase:

- real-world operational pain point selection,
- practical AI product framing,
- clean full-stack engineering setup,
- a credible path from MVP to autonomous enterprise workflow.

## Contribution Notes

This repository is currently scaffolded for fast iteration during a hackathon. Keep the architecture simple, demo-friendly, and easy to extend.

## Next Steps

- connect real or mock construction supply data,
- implement risk scoring logic,
- add charts and alert cards,
- integrate an LLM-powered operations copilot,
- replace placeholder diagrams with final visuals.
