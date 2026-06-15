import { ChartCard } from "../components/ChartCard";

function Devices() {
  return (
    <div className="page-container">
      <h2>📱 Device Analysis</h2>

      <div className="charts-grid">
        <ChartCard title="Android vs iOS Consumption" data={[]} />

        <ChartCard title="Sessions by Device Type" data={[]} />

        <ChartCard title="FPS Comparison" data={[]} />

        <ChartCard title="Battery Efficiency by Device" data={[]} />
      </div>
    </div>
  );
}

export default Devices;