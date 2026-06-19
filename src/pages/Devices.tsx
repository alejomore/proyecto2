import useFetchData from "../hooks/userFetchData";
import AnalyticsChart from "../components/AnalyticsChart";

function Devices() {
  const data = useFetchData();

  if (!data) {
    return <p>Loading...</p>;
  }

  const deviceStats = Object.values(
    data.reduce((acc, item) => {
      const device = item.Device_Type;

      if (!acc[device]) {
        acc[device] = {
          device,
          battery: 0,
          fps: 0,
          session: 0,
          count: 0,
        };
      }

      acc[device].battery += item["Battery_Drop_%"];
      acc[device].fps += item.FPS;
      acc[device].session += item.Session_Time_Minutes;
      acc[device].count++;

      return acc;
    }, {} as Record<
      string,
      {
        device: string;
        battery: number;
        fps: number;
        session: number;
        count: number;
      }
    >)
  );

  const bestBatteryDevice = [...deviceStats].sort(
    (a, b) =>
      a.battery / a.count -
      b.battery / b.count
  )[0];

  const highestFPSDevice = [...deviceStats].sort(
    (a, b) =>
      b.fps / b.count -
      a.fps / a.count
  )[0];

  const longestSessionDevice = [...deviceStats].sort(
    (a, b) =>
      b.session / b.count -
      a.session / a.count
  )[0];

  const mostUsedDevice = [...deviceStats].sort(
    (a, b) => b.count - a.count
  )[0];

  return (
    <div className="page-container">
      <h2>Device Analysis</h2>

      <p>
        Explore how different device types affect
        battery consumption, gaming performance,
        and session duration.
      </p>

      <div className="charts-grid">

        <AnalyticsChart
          title="Average Battery Consumption by Device"
          data={data}
          groupBy="Device_Type"
          metric="Battery_Drop_%"
        />

        <AnalyticsChart
          title="Average FPS by Device"
          data={data}
          groupBy="Device_Type"
          metric="FPS"
        />

        <AnalyticsChart
          title="Average Session Time by Device"
          data={data}
          groupBy="Device_Type"
          metric="Session_Time_Minutes"
        />

      </div>

      <div className="insights-grid">

        <div className="insight-card">
          <h3>Best Battery Device</h3>
          <p>{bestBatteryDevice?.device}</p>
        </div>

        <div className="insight-card">
          <h3>Highest FPS Device</h3>
          <p>{highestFPSDevice?.device}</p>
        </div>

        <div className="insight-card">
          <h3>Longest Average Session</h3>
          <p>{longestSessionDevice?.device}</p>
        </div>

        <div className="insight-card">
          <h3>Most Used Device</h3>
          <p>{mostUsedDevice?.device}</p>
        </div>

      </div>
    </div>
  );
}

export default Devices;