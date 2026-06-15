import AlertUI from "../components/AlertUI";
import KPIcard from "../components/KPIcard";
import ChartCard from "../components/ChartCard";
import FilterPanel from "../components/FilterPanel";
import useFetchData from "../hooks/userFetchData";
import GamingTable from "../components/GamingTable";

function Dashboard() {
  const data = useFetchData();
  if (!data) {
    return <p>Loading...</p>;
  }
  const avgFPS =
  data.reduce(
    (sum, item) => sum + item.FPS,
    0
  ) / data.length;
  const avgBatteryDrop =
  data.reduce(
    (sum, item) => sum + item["Battery_Drop_%"],
    0
  ) / data.length;
  const avgSessionTime =
  data.reduce(
    (sum, item) => sum + item.Session_Time_Minutes,
    0
  ) / data.length;
  const totalSessions = data.length;
  return (
    <>
      <AlertUI />
    
      <div className="dashboard-layout">
        <div className="dashboard-content">
          <div className="kpi-grid">
            <KPIcard
              title="Avg Battery Drop"
              value={`${avgBatteryDrop.toFixed(1)}%`}
            />

            <KPIcard
              title="Avg FPS"
              value={avgFPS.toFixed(0)}
            />

            <KPIcard
              title="Avg Session Time"
              value={`${avgSessionTime.toFixed(0)} min`}
            />

            <KPIcard
              title="Total Sessions"
              value={totalSessions.toString()}
            />
          <GamingTable data={data} />
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