import { DataGrid } from "@mui/x-data-grid";
import type { Root2 } from "../types/DashboardTypes";

interface GamingTableProps {
  data: Root2[];
}

function GamingTable({
  data,
}: GamingTableProps) {

  const rows = data.map((item, index) => ({
    id: index,
    game: item.Game_Name,
    device: item.Device_Type,
    fps: item.FPS,
    session: item.Session_Time_Minutes,
    batteryDrop: item["Battery_Drop_%"],
  }));

  const columns = [
    {
      field: "game",
      headerName: "Game",
      flex: 1,
    },
    {
      field: "device",
      headerName: "Device",
      flex: 1,
    },
    {
      field: "fps",
      headerName: "FPS",
      flex: 0.7,
    },
    {
      field: "session",
      headerName: "Session",
      flex: 1,
    },
    {
      field: "batteryDrop",
      headerName: "Battery Drop %",
      flex: 1,
    },
  ];

  return (
    <div className="table-container">
      <h3>Gaming Sessions</h3>

      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10, 20]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
      />
    </div>
  );
}

export default GamingTable;