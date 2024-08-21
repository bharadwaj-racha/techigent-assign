// src/components/SideBar.js
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import './SideBar.css';

function SideBar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <i className="bi bi-house-door"></i> 
        </li>
        <li>
          <i className="bi bi-folder"></i> 
        </li>
        <li>
          <i className="bi bi-people"></i> 
        </li>
        <li>
          <i className="bi bi-graph-up"></i> 
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
