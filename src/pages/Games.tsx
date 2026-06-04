import ChartCard from "../components/ChartCard";

function Games() {
  return (
    <div className="page-container">
      <h2>🎮 Games Analysis</h2>

      <div className="charts-grid">
        <ChartCard title="Battery Consumption Ranking" />

        <ChartCard title="Average Session Time per Game" />

        <ChartCard title="Most Efficient Games" />

        <ChartCard title="FPS Distribution by Game" />
      </div>
    </div>
  );
}

export default Games;