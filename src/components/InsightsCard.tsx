import type { Root2 } from "../types/DashboardTypes";

interface InsightsCardProps {
  data: Root2[];
}

function InsightsCard({
  data,
}: InsightsCardProps) {

  if (!data.length) {
    return null;
  }

  const highestBatteryUsage = [...data].sort(
    (a, b) =>
      b["Battery_Drop_%"] -
      a["Battery_Drop_%"]
  )[0];

  const highestFPS = [...data].sort(
    (a, b) =>
      b.FPS -
      a.FPS
  )[0];

  return (
    <div className="insights-card">

      <h3>Dataset Insights</h3>

      <p>
        Highest battery usage:
        {" "}
        {highestBatteryUsage.Game_Name}
        {" "}
        ({highestBatteryUsage["Battery_Drop_%"]}%)
      </p>

      <p>
        Highest FPS:
        {" "}
        {highestFPS.Game_Name}
        {" "}
        ({highestFPS.FPS} FPS)
      </p>
      <p>
        Longest Session:
        {" "}
        {
          Math.max(
            ...data.map(
              item =>
                item.Session_Time_Minutes
            )
          )
        }
        {" "}
        minutes
      </p>

    </div>
  );
}

export default InsightsCard;