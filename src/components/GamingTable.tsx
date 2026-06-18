import type { Root2 } from "../types/DashboardTypes";

interface GamingTableProps {
  data: Root2[];
}

function GamingTable({
  data,
}: GamingTableProps) {
  return (
    <div className="table-container">

      <h3>Gaming Sessions</h3>

      <table>
        <thead>
          <tr>
            <th>Game</th>
            <th>Device</th>
            <th>FPS</th>
            <th>Session</th>
            <th>Battery</th>
          </tr>
        </thead>

        <tbody>
          {data.slice(0, 15).map((item, index) => (
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