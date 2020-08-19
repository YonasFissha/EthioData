import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <nav id="sidebar">
        <div className="sidebar-header">
          <Link to="/">
            <h1 className="text-center">
              <i className="fas fa-database"></i>EthioData
            </h1>
          </Link>
        </div>

        <ul className="list-unstyled components">
          <p>We Promote Data based decision making</p>
          <li className="active">
            <a
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i className="fas fa-database mr-1"></i> Data
            </a>
            <ul className="collapse list-unstyled" id="homeSubmenu">
              <li>
                <Link to="/covid"> Covid 19</Link>
              </li>
              <li>
                <Link to="/agriculture">Agriculture</Link>
              </li>
              <li>
                <Link to="/health">Health</Link>
              </li>
              <li>
                <Link to="/Education">Education</Link>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i class="fas fa-download mr-1"></i> Downloads
            </a>
            <ul className="collapse list-unstyled" id="pageSubmenu">
              {/* <li>
                <a href="#">Page 1</a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
              <li>
                <a href="#">Page 3</a>
              </li> */}
            </ul>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-address-card mr-1"></i> About
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-id-card-alt mr-1"></i> Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
