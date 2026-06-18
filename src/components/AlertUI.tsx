import type { Root2 } from "../types/DashboardTypes";

interface AlertUIProps {
  data: Root2[];
}

function AlertUI({
  data,
}: AlertUIProps) {

  if (!data.length) {
    return null;
  }

  const highestBatteryUsage = [...data].sort(
    (a, b) =>
      b["Battery_Drop_%"] -
      a["Battery_Drop_%"]
  )[0];

  const avgBatteryDrop =
    data.reduce(
      (sum, item) =>
        sum + item["Battery_Drop_%"],
      0
    ) / data.length;

  return (
    <div className="alert-container">

      <div className="alert-card">
        ⚠ Highest battery usage:
        {" "}
        {highestBatteryUsage.Game_Name}
      </div>

      <div className="alert-card">
        📱 Devices analyzed:
        {" "}
        {new Set(
          data.map(
            item => item.Device_Type
          )
        ).size}
      </div>

      <div className="alert-card">
        🔋 Average battery drop:
        {" "}
        {avgBatteryDrop.toFixed(1)}%
      </div>

    </div>
  );
}

export default AlertUI;