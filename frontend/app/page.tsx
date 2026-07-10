import { RiskCard } from "@/components/risk-card";
import { getOverview } from "@/lib/api";

export default async function Home() {
  const overview = await getOverview();

  return (
    <main className="page-shell">
      <section className="hero">
        <p className="hero__eyebrow">Hackathon MVP</p>
        <h1>Autonomous Construction Supply Chain Brain</h1>
        <p className="hero__copy">
          A unified dashboard for supply risk detection, delay visibility, and
          procurement decision support.
        </p>
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <span>Project</span>
          <strong>{overview.project_name}</strong>
        </div>
        <div className="stat-card">
          <span>Active Orders</span>
          <strong>{overview.active_orders}</strong>
        </div>
        <div className="stat-card">
          <span>Delayed Shipments</span>
          <strong>{overview.delayed_shipments}</strong>
        </div>
        <div className="stat-card">
          <span>Critical Materials</span>
          <strong>{overview.critical_materials}</strong>
        </div>
        <div className="stat-card stat-card--wide">
          <span>Estimated Cost Exposure</span>
          <strong>
            ${overview.estimated_cost_exposure_usd.toLocaleString("en-US")}
          </strong>
        </div>
      </section>

      <section className="content-grid">
        <div className="panel">
          <div className="panel__header">
            <p className="eyebrow">Recommended Actions</p>
            <h2>What the team should do next</h2>
          </div>
          <ul className="action-list">
            {overview.recommendations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="panel">
          <div className="panel__header">
            <p className="eyebrow">Risk Watchlist</p>
            <h2>Materials that need immediate attention</h2>
          </div>
          <div className="risk-grid">
            {overview.top_risks.map((risk) => (
              <RiskCard
                key={risk.material}
                material={risk.material}
                status={risk.status}
                score={risk.risk_score}
                issue={risk.issue}
                action={risk.recommended_action}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
