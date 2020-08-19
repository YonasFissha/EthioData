import React, { Component } from "react";

export default class Pages extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button type="button" id="sidebarCollapse" className="navbar-btn">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="ml-auto">Dashboard</div>
        </div>
      </nav>
    );
  }
}
