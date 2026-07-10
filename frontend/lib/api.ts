export type MaterialRisk = {
  material: string;
  status: string;
  risk_score: number;
  issue: string;
  recommended_action: string;
};

export type OverviewResponse = {
  project_name: string;
  active_orders: number;
  delayed_shipments: number;
  critical_materials: number;
  estimated_cost_exposure_usd: number;
  recommendations: string[];
  top_risks: MaterialRisk[];
};

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://127.0.0.1:8000";

export async function getOverview(): Promise<OverviewResponse> {
  const response = await fetch(`${API_BASE_URL}/api/v1/overview`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch overview");
  }

  return response.json();
}
