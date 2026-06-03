import { useState } from "react";

import "./App.css";

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
    <div className="app">
      <HeaderUI
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {renderPage()}
    </div>
  );
}

export default App;