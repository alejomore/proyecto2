import AlertUI from "../components/AlertUI";
import KPIcard from "../components/KPIcard";

function Dashboard() {
  return (
    <div>
      <AlertUI />

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
          value="1,250"
        />
      </div>

      <div className="charts-grid">
        <div className="chart-placeholder">
          Battery Consumption by Game
        </div>

        <div className="chart-placeholder">
          Battery Drop Distribution
        </div>

        <div className="chart-placeholder">
          FPS vs Battery Consumption
        </div>

        <div className="chart-placeholder">
          Session Time vs Battery Consumption
        </div>

        <div className="chart-placeholder">
          Android vs iOS Consumption
        </div>

        <div className="chart-placeholder">
          Sessions by Device Type
        </div>
      </div>
    </div>
  );
}

export default Dashboard;