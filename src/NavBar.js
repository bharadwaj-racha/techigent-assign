// src/components/NavBar.js
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
        <div className="search-bar"style={{marginRight: '25px'}}>
      <input type="text" placeholder="Search" />
    </div>
      <ul>
        <li>
          <i className="bi bi-speedometer2 nav-icon"></i>
          Dashboard
        </li>
        <li>
          <i className="bi bi-calendar2-check nav-icon"></i>
          Leaves
        </li>
        <li>
          <i className="bi bi-clock-history nav-icon"></i>
          Daily Timesheet
        </li>
        <li>
          <i className="bi bi-file-earmark-bar-graph nav-icon"></i>
          Reports
        </li>
        <li>
          <i className="bi bi-wallet2 nav-icon"></i>
          My Expenses
        </li>
        <li>
          <i className="bi bi-gear nav-icon"></i>
          My Options
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
