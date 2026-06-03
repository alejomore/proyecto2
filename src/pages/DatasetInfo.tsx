function DatasetInfo() {
  return (
    <div className="page-container">
      <h2>📊 Dataset Information</h2>

      <p>
        Battery Percentage vs Gaming Sessions Dataset
      </p>

      <h3>Variables</h3>

      <ul>
        <li>Game_Name</li>
        <li>Device_Type</li>
        <li>Session_Time_Minutes</li>
        <li>FPS</li>
        <li>Battery_Start_%</li>
        <li>Battery_End_%</li>
        <li>Battery_Drop_%</li>
      </ul>
    </div>
  );
}

export default DatasetInfo;