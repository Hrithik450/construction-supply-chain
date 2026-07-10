from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.models import MaterialRisk, OverviewResponse
from app.settings import settings

app = FastAPI(title=settings.app_name, version=settings.app_version)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.frontend_origin],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health_check() -> dict[str, str]:
    return {"status": "ok"}


@app.get("/api/v1/overview", response_model=OverviewResponse)
def get_overview() -> OverviewResponse:
    return OverviewResponse(
        project_name="Metro Line Phase II",
        active_orders=42,
        delayed_shipments=5,
        critical_materials=3,
        estimated_cost_exposure_usd=185000,
        recommendations=[
            "Escalate cement supplier SLA review within 4 hours.",
            "Reroute steel delivery for Zone B to avoid a 2-day delay.",
            "Place a safety-stock reorder for electrical conduit today.",
        ],
        top_risks=[
            MaterialRisk(
                material="Cement",
                status="high",
                risk_score=91,
                issue="Supplier dispatch delay affecting next concrete pour.",
                recommended_action="Trigger alternate vendor and notify execution lead.",
            ),
            MaterialRisk(
                material="Rebar",
                status="medium",
                risk_score=72,
                issue="Transit bottleneck may impact structural sequencing.",
                recommended_action="Confirm carrier ETA and reserve buffer stock.",
            ),
            MaterialRisk(
                material="Electrical Conduit",
                status="high",
                risk_score=88,
                issue="Inventory trending below safe threshold for upcoming work.",
                recommended_action="Issue urgent reorder and reprioritize site allocation.",
            ),
        ],
    )
