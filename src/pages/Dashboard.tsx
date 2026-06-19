import { useState } from "react";

import AlertUI from "../components/AlertUI";
import KPIcard from "../components/KPIcard";
import FilterPanel from "../components/FilterPanel";
import useFetchData from "../hooks/userFetchData";
import GamingTable from "../components/GamingTable";
import InsightsCard from "../components/InsightsCard";
import AnalyticsChart from "../components/AnalyticsChart";

function Dashboard() {
  const data = useFetchData();

const [selectedGame, setSelectedGame] =
  useState("All");

const [selectedDevice, setSelectedDevice] =
  useState("All");

    if (!data) {
    return <p>Loading...</p>;
  }

const filteredData = data.filter((item) => {

  const gameMatch =
    selectedGame === "All" ||
    item.Game_Name === selectedGame;

  const deviceMatch =
    selectedDevice === "All" ||
    item.Device_Type === selectedDevice;

  return gameMatch && deviceMatch;
});

const avgFPS =
  filteredData.length > 0
    ? filteredData.reduce(
        (sum, item) => sum + item.FPS,
        0
      ) / filteredData.length
    : 0;

const avgBatteryDrop =
  filteredData.length > 0
    ? filteredData.reduce(
        (sum, item) =>
          sum + item["Battery_Drop_%"],
        0
      ) / filteredData.length
    : 0;

const avgSessionTime =
  filteredData.length > 0
    ? filteredData.reduce(
        (sum, item) =>
          sum + item.Session_Time_Minutes,
        0
      ) / filteredData.length
    : 0;

const totalSessions =
  filteredData.length;

  return (
    <>
      <AlertUI data={filteredData} />

      <div className="dashboard-content">

        <div className="kpi-grid">

          <KPIcard
            title="Avg Battery Drop"
            value={`${avgBatteryDrop.toFixed(1)}%`}
          />

          <KPIcard
            title="Avg FPS"
            value={avgFPS.toFixed(0)}
          />

          <KPIcard
            title="Avg Session Time"
            value={`${avgSessionTime.toFixed(0)} min`}
          />

          <KPIcard
            title="Total Sessions"
            value={totalSessions.toString()}
          />

        </div>

          <FilterPanel
            data={data}
            selectedGame={selectedGame}
            selectedDevice={selectedDevice}
            onGameChange={setSelectedGame}
            onDeviceChange={setSelectedDevice}
          />

        <div className="main-dashboard-grid">

          <AnalyticsChart
            title="Battery Consumption by Game"
            data={filteredData}
            groupBy="Game_Name"
            metric="Battery_Drop_%"
            layout="vertical"
          />

          <GamingTable
            data={filteredData}
          />

        </div>

        <InsightsCard
          data={filteredData}
        />

      </div>
    </>
  );
}

export default Dashboard;