import useFetchData from "../hooks/userFetchData";
import AnalyticsChart from "../components/AnalyticsChart";

function Games() {
  const data = useFetchData();

  if (!data) {
    return <p>Loading...</p>;
  }

  const gameStats = Object.values(
    data.reduce((acc, item) => {
      const game = item.Game_Name;

      if (!acc[game]) {
        acc[game] = {
          game,
          battery: 0,
          fps: 0,
          session: 0,
          count: 0,
        };
      }

      acc[game].battery += item["Battery_Drop_%"];
      acc[game].fps += item.FPS;
      acc[game].session += item.Session_Time_Minutes;
      acc[game].count++;

      return acc;
    }, {} as Record<
      string,
      {
        game: string;
        battery: number;
        fps: number;
        session: number;
        count: number;
      }
    >)
  );

  const mostBatteryIntensive = [...gameStats].sort(
    (a, b) =>
      b.battery / b.count -
      a.battery / a.count
  )[0];

  const bestFPSGame = [...gameStats].sort(
    (a, b) =>
      b.fps / b.count -
      a.fps / a.count
  )[0];

  const longestSessionGame = [...gameStats].sort(
    (a, b) =>
      b.session / b.count -
      a.session / a.count
  )[0];

  const mostEfficientGame = [...gameStats]
    .map((g) => ({
      game: g.game,
      efficiency:
        (g.fps / g.count) /
        (g.battery / g.count || 1),
    }))
    .sort((a, b) => b.efficiency - a.efficiency)[0];

  return (
    <div className="page-container">
      <h2>Games Analysis</h2>

      <p>
        Compare how each game impacts battery usage,
        performance, and session duration.
      </p>

      {/* CHARTS */}
      <div className="charts-grid">

        <AnalyticsChart
          title="Battery Consumption by Game"
          data={data}
          groupBy="Game_Name"
          metric="Battery_Drop_%"
        />

        <AnalyticsChart
          title="Average FPS by Game"
          data={data}
          groupBy="Game_Name"
          metric="FPS"
        />

        <AnalyticsChart
          title="Average Session Time by Game"
          data={data}
          groupBy="Game_Name"
          metric="Session_Time_Minutes"
        />

      </div>

      {/* INSIGHTS */}
      <div className="insights-grid">

        <div className="insight-card">
          <h3>Most Battery Intensive</h3>
          <p>{mostBatteryIntensive?.game}</p>
        </div>

        <div className="insight-card">
          <h3>Best FPS Game</h3>
          <p>{bestFPSGame?.game}</p>
        </div>

        <div className="insight-card">
          <h3>Longest Session</h3>
          <p>{longestSessionGame?.game}</p>
        </div>

        <div className="insight-card">
          <h3>Most Efficient Game</h3>
          <p>{mostEfficientGame?.game}</p>
        </div>

      </div>
    </div>
  );
}

export default Games;