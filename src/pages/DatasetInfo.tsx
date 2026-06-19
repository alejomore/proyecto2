import useFetchData from "../hooks/userFetchData";

function DatasetInfo() {
  const data = useFetchData();

  if (!data) {
    return <p>Loading...</p>;
  }

  const totalRecords = data.length;

  const uniqueGames = new Set(
    data.map((d) => d.Game_Name)
  ).size;

  const uniqueDevices = new Set(
    data.map((d) => d.Device_Type)
  ).size;

  const avgFPS =
    data.reduce((sum, d) => sum + d.FPS, 0) /
    totalRecords;

  const avgSession =
    data.reduce(
      (sum, d) => sum + d.Session_Time_Minutes,
      0
    ) / totalRecords;

  const avgBatteryDrop =
    data.reduce(
      (sum, d) => sum + d["Battery_Drop_%"],
      0
    ) / totalRecords;

  const mostPlayedGame = Object.entries(
    data.reduce((acc, item) => {
      acc[item.Game_Name] =
        (acc[item.Game_Name] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  ).sort((a, b) => b[1] - a[1])[0];

  const mostCommonDevice = Object.entries(
    data.reduce((acc, item) => {
      acc[item.Device_Type] =
        (acc[item.Device_Type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  ).sort((a, b) => b[1] - a[1])[0];

  return (
    <div className="page-container">
      <h2>Dataset Information</h2>

      <p>
        Overview of the gaming performance dataset
        analyzing battery consumption, FPS, and
        session behavior across devices and games.
      </p>

      {/* KPI OVERVIEW */}
      <div className="kpi-grid">

        <div className="kpi-card">
          <h3>Total Records</h3>
          <p>{totalRecords}</p>
        </div>

        <div className="kpi-card">
          <h3>Unique Games</h3>
          <p>{uniqueGames}</p>
        </div>

        <div className="kpi-card">
          <h3>Device Types</h3>
          <p>{uniqueDevices}</p>
        </div>

        <div className="kpi-card">
          <h3>Avg FPS</h3>
          <p>{avgFPS.toFixed(1)}</p>
        </div>

        <div className="kpi-card">
          <h3>Avg Session Time</h3>
          <p>{avgSession.toFixed(1)} min</p>
        </div>

        <div className="kpi-card">
          <h3>Avg Battery Drop</h3>
          <p>{avgBatteryDrop.toFixed(1)}%</p>
        </div>

      </div>

      {/* VARIABLES TABLE */}
      <div className="dataset-section">
        <h3>Variables</h3>

        <table className="dataset-table">
          <thead>
            <tr>
              <th>Variable</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Game_Name</td>
              <td>Nombre del juego analizado</td>
            </tr>

            <tr>
              <td>Device_Type</td>
              <td>Tipo de dispositivo (Android / iOS)</td>
            </tr>

            <tr>
              <td>FPS</td>
              <td>Frames per second durante la sesión</td>
            </tr>

            <tr>
              <td>Session_Time_Minutes</td>
              <td>Duración de la sesión de juego</td>
            </tr>

            <tr>
              <td>Battery_Start_%</td>
              <td>Batería inicial del dispositivo</td>
            </tr>

            <tr>
              <td>Battery_End_%</td>
              <td>Batería final del dispositivo</td>
            </tr>

            <tr>
              <td>Battery_Drop_%</td>
              <td>Consumo total de batería</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* INSIGHTS */}
      <div className="insights-grid">

        <div className="insight-card">
          <h3>Most Played Game</h3>
          <p>{mostPlayedGame?.[0]}</p>
        </div>

        <div className="insight-card">
          <h3>Most Common Device</h3>
          <p>{mostCommonDevice?.[0]}</p>
        </div>

        <div className="insight-card">
          <h3>Performance Insight</h3>
          <p>
            Higher FPS tends to correlate with higher battery consumption in this dataset.
          </p>
        </div>

        <div className="insight-card">
          <h3>Battery Insight</h3>
          <p>
            Games with longer sessions generally show higher total battery drop.
          </p>
        </div>

      </div>
    </div>
  );
}

export default DatasetInfo;