type AlertUIProps = {
  data: Array<{
    Game_Name: string;
    "Battery_Drop_%": number;
  }>;
};

function AlertUI({ data }: AlertUIProps) {
  const highestBatteryGame = data.length
    ? [...data].sort(
        (a, b) => b["Battery_Drop_%"] - a["Battery_Drop_%"]
      )[0]
    : null;
  
  return (
    <div className="alert-container">
      <div className="alert-card">
          ⚠ Highest battery usage:
          {highestBatteryGame ? highestBatteryGame.Game_Name : 'N/A'}
      </div>

      <div className="alert-card">
        📱 Android sessions dominate the dataset
      </div>

      <div className="alert-card">
        🔋 Average battery drop: 21%
      </div>
    </div>
  );
}

export default AlertUI;