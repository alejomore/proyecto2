import type { Root2 } from "../types/DashboardTypes";

interface InsightsProps {
  data: Root2[];
}

function InsightsCard({
  data,
}: InsightsProps) {

  const maxBatteryGame =
    [...data].sort(
      (a, b) =>
        b["Battery_Drop_%"] -
        a["Battery_Drop_%"]
    )[0];

  return (
    <div className="insights-card">

      <h3>
        Dataset Insights
      </h3>

      <p>
        🔋 Highest battery drop:
        {" "}
        {maxBatteryGame.Game_Name}
      </p>

      <p>
        📱 Device:
        {" "}
        {maxBatteryGame.Device_Type}
      </p>

      <p>
        🎮 FPS:
        {" "}
        {maxBatteryGame.FPS}
      </p>

    </div>
  );
}

export default InsightsCard;