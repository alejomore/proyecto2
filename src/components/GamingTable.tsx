import { useState } from "react";
import type { Root2 } from "../types/DashboardTypes";

interface GamingTableProps {
  data: Root2[];
}

function GamingTable({
  data,
}: GamingTableProps) {

  const ITEMS_PER_PAGE = 10;

  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(
    data.length / ITEMS_PER_PAGE
  );

  const currentData = data.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="table-container">

      <h3>Gaming Sessions</h3>
      <p className="table-info">
        Showing {currentData.length} of {data.length} records
      </p>
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
          {currentData.map((item, index) => (
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

      <div className="pagination">

        <button
          disabled={page === 1}
          onClick={() =>
            setPage(page - 1)
          }
        >
          ← Previous
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() =>
            setPage(page + 1)
          }
        >
          Next →
        </button>

      </div>

    </div>
  );
}

export default GamingTable;