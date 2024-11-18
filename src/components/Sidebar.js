import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Applied Jobs</a></li>
        <li><a href="#">Upcoming Interviews</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
