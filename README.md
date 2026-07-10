# 🏗️ Autonomous Construction Supply Chain Brain

> An AI-powered multi-agent platform that continuously understands construction projects, predicts downstream supply chain risks, and autonomously recommends corrective actions.

---

## Overview

Construction supply chains generate enormous amounts of procurement, logistics, vendor, and project information. However, these data sources remain fragmented across disconnected systems, making it difficult for project teams to understand project health in real time.

Autonomous Construction Supply Chain Brain transforms these disconnected data sources into a unified construction knowledge graph, enabling AI agents to reason across procurement documents, vendors, shipments, schedules, and project dependencies.

---

## Problem

Construction teams continuously struggle to answer operational questions such as:

- What's been approved?
- What's currently being fabricated?
- What's delayed?
- Where is the shipment now?
- Will it arrive on time?
- Which downstream tasks will be affected?

These questions are often answered manually by reviewing dozens of disconnected documents.

---

## Solution

Our platform acts as an AI-powered Supply Chain Manager.

Instead of retrieving isolated documents, it continuously:

- Understands project state
- Detects procurement and shipment risks
- Predicts schedule impacts
- Recommends corrective actions
- Drafts operational workflows for human approval

---

# Architecture

> ![System Architecture](https://res.cloudinary.com/duozomapm/image/upload/v1783713106/architecture-2_y96xnh.svg)

---

# AI Pipeline

```
Construction Documents
        │
Continuous Ingestion
        │
Document Intelligence
        │
Ontology Standardization
        │
Knowledge Graph (Neo4j)
        │
GraphRAG + Hybrid Retrieval
        │
Planner Agent
        │
Specialized Agents
        │
Decision & Execution
        │
Human Approval
```

---

# Specialized AI Agents

### Procurement Intelligence Agent

- Purchase Orders
- Contracts
- Invoices
- RFIs
- Approval tracking

---

### Supply Chain Intelligence Agent

- Vendors
- Fabrication
- Shipments
- Material availability

---

### Impact & Risk Agent

- Dependency reasoning
- Schedule impacts
- Critical path analysis
- Risk identification

---

### Decision & Execution Agent

- Ranked recommendations
- Confidence scoring
- Draft vendor emails
- Follow-up task generation

---

# MVP Scope

The MVP demonstrates:

- Continuous document ingestion
- Construction Knowledge Graph
- GraphRAG retrieval
- Multi-agent reasoning
- Evidence-backed recommendations
- Human approval workflow

---

# Repository Structure

```text
backend/
frontend/
docs/
README.md
```

---

# Tech Stack

### AI

- LangGraph
- LangChain
- OpenAI GPT-5
- GraphRAG

### Knowledge

- Neo4j
- PostgreSQL
- OpenAI Embeddings

### Backend

- Python
- FastAPI
- Pydantic

### Frontend

- Next.js
- React
- Tailwind CSS

### Infrastructure

- Docker
- GitHub

---

# Local Development

## Backend

```bash
cd backend
uv sync
uv run uvicorn app.main:app --reload
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# Roadmap

- Build construction knowledge graph
- Integrate public construction datasets
- Implement four specialized AI agents
- Deploy GraphRAG retrieval
- Build end-to-end workflow
- Add dashboard visualizations

---

# Demo Scenario

1. User uploads procurement documents.
2. AI extracts entities and relationships.
3. Knowledge Graph is updated.
4. Agents detect supply chain risks.
5. AI recommends corrective actions.
6. User approves operational workflows.

---

# Research Foundation

This project is inspired by recent work in:

- Construction Knowledge Graphs
- GraphRAG
- Multi-Agent Systems
- Construction Document Intelligence
- Enterprise AI Workflows
