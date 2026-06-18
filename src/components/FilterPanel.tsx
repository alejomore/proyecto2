import type { Root } from "../types/DashboardTypes";

interface FilterPanelProps {
  data: Root;

  selectedGame: string;
  selectedDevice: string;

  onGameChange: (value: string) => void;
  onDeviceChange: (value: string) => void;
}

function FilterPanel({
  data,
  selectedGame,
  selectedDevice,
  onGameChange,
  onDeviceChange,
}: FilterPanelProps) {

  const games = [
    ...new Set(
      data.map(
        item => item.Game_Name
      )
    )
  ];

  const devices = [
    ...new Set(
      data.map(
        item => item.Device_Type
      )
    )
  ];

  return (
    <div className="filter-panel">

      <div className="filter-group">

        <label>Game</label>

        <select
          value={selectedGame}
          onChange={(e) =>
            onGameChange(
              e.target.value
            )
          }
        >
          <option value="All">
            All Games
          </option>

          {games.map(game => (
            <option
              key={game}
              value={game}
            >
              {game}
            </option>
          ))}
        </select>

      </div>

      <div className="filter-group">

        <label>Device</label>

        <select
          value={selectedDevice}
          onChange={(e) =>
            onDeviceChange(
              e.target.value
            )
          }
        >
          <option value="All">
            All Devices
          </option>

          {devices.map(device => (
            <option
              key={device}
              value={device}
            >
              {device}
            </option>
          ))}
        </select>

      </div>

    </div>
  );
}

export default FilterPanel;