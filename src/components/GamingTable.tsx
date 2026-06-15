interface GamingTableProps {
  data: any[];
}

function GamingTable({
  data,
}: GamingTableProps) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Game</th>
            <th>Device</th>
            <th>FPS</th>
            <th>Session</th>
            <th>Battery Drop</th>
          </tr>
        </thead>

        <tbody>
          {data.slice(0, 20).map((item, index) => (
            <tr key={index}>
              <td>{item.Game_Name}</td>
              <td>{item.Device_Type}</td>
              <td>{item.FPS}</td>
              <td>{item.Session_Time_Minutes}</td>
              <td>{item["Battery_Drop_%"]}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GamingTable;