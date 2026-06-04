import ChartCard from "../components/ChartCard";

function Devices() {
  return (
    <div className="page-container">
      <h2>📱 Device Analysis</h2>

      <div className="charts-grid">
        <ChartCard title="Android vs iOS Consumption" />

        <ChartCard title="Sessions by Device Type" />

        <ChartCard title="FPS Comparison" />

        <ChartCard title="Battery Efficiency by Device" />
      </div>
    </div>
  );
}

export default Devices;