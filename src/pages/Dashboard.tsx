import AlertUI from "../components/AlertUI";
import KPIcard from "../components/KPIcard";
import ChartCard from "../components/ChartCard";
import FilterPanel from "../components/FilterPanel";

function Dashboard() {
  return (
    <>
      <AlertUI />

      <div className="dashboard-layout">
        <div className="dashboard-content">
          <div className="kpi-grid">
            <KPIcard
              title="Avg Battery Drop"
              value="21%"
            />

            <KPIcard
              title="Avg FPS"
              value="87"
            />

            <KPIcard
              title="Avg Session Time"
              value="42 min"
            />

            <KPIcard
              title="Total Sessions"
              value="1250"
            />
          </div>

          <div className="charts-grid">
            <ChartCard title="Battery Consumption by Game" />
            <ChartCard title="Battery Drop Distribution" />
            <ChartCard title="FPS vs Battery Consumption" />
            <ChartCard title="Session Time vs Battery Consumption" />
            <ChartCard title="Android vs iOS Consumption" />
            <ChartCard title="Sessions by Device Type" />
          </div>
        </div>

        <FilterPanel />
      </div>
    </>
  );
}

export default Dashboard;