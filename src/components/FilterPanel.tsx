function FilterPanel() {
  return (
    <div className="filter-panel">
      <h3>Filters</h3>

      <div className="filter-group">
        <label>Game</label>

        <select>
          <option>All Games</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Device</label>

        <select>
          <option>All Devices</option>
        </select>
      </div>

      <div className="filter-group">
        <label>FPS Range</label>

        <input
          type="range"
          min="30"
          max="120"
        />
      </div>

      <div className="filter-group">
        <label>Session Time</label>

        <input
          type="range"
          min="0"
          max="120"
        />
      </div>
    </div>
  );
}

export default FilterPanel;