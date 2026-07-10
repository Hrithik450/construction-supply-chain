from pydantic import BaseModel


class MaterialRisk(BaseModel):
    material: str
    status: str
    risk_score: int
    issue: str
    recommended_action: str


class OverviewResponse(BaseModel):
    project_name: str
    active_orders: int
    delayed_shipments: int
    critical_materials: int
    estimated_cost_exposure_usd: int
    recommendations: list[str]
    top_risks: list[MaterialRisk]
