import { ChartCard } from "../components/ChartCard";

function Games() {
  return (
    <div className="page-container">
      <h2>🎮 Games Analysis</h2>

      <div className="charts-grid">
        <ChartCard title="Battery Consumption Ranking" data={[]} />

        <ChartCard title="Average Session Time per Game" data={[]} />

        <ChartCard title="Most Efficient Games" data={[]} />

        <ChartCard title="FPS Distribution by Game" data={[]} />
      </div>
    </div>
  );
}

export default Games;