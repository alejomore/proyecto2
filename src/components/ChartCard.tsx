interface ChartCardProps {
  title: string;
}

function ChartCard({
  title,
}: ChartCardProps) {
  return (
    <div className="chart-card">
      <h3>{title}</h3>

        <div className="chart-body">
        📈 Visualization Area
        </div>
    </div>
  );
}

export default ChartCard;