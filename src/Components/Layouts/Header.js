import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <h3 className="text-left text-secondary">
              <span className="glyphicon glyphicon-cog"></span> Dashboard{" "}
              <small>Manager Your Data</small>
            </h3>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}
