import { useState } from "react";

import "./App.css";

import SidebarUI from "./components/SidebarUI";
import HeaderUI from "./components/HeaderUI";

import Dashboard from "./pages/Dashboard";
import Games from "./pages/Games";
import Devices from "./pages/Devices";
import DatasetInfo from "./pages/DatasetInfo";

function App() {
  const [currentPage, setCurrentPage] =
    useState("Dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "Games":
        return <Games />;

      case "Devices":
        return <Devices />;

      case "Dataset Info":
        return <DatasetInfo />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-layout">
      <SidebarUI
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <main className="main-content">
        <HeaderUI />

        {renderPage()}
      </main>
    </div>
  );
}

export default App;