type RiskCardProps = {
  material: string;
  status: string;
  score: number;
  issue: string;
  action: string;
};

export function RiskCard({
  material,
  status,
  score,
  issue,
  action,
}: RiskCardProps) {
  return (
    <article className="risk-card">
      <div className="risk-card__header">
        <p className="eyebrow">{status} risk</p>
        <span className="score">{score}</span>
      </div>
      <h3>{material}</h3>
      <p>{issue}</p>
      <div className="risk-card__action">
        <strong>Action:</strong> {action}
      </div>
    </article>
  );
}
