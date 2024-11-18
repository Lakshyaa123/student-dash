import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import PlacementTracker from "./components/PlacementTracker";

import "./App.css";
import "./theme.css"; // Color theme

const App = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="content">
        <Sidebar />
        <PlacementTracker />
      </div>
    </div>
  );
};

export default App;
