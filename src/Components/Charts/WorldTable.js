import React, { Component } from "react";
import axios from "axios";
import "./style.css";
export default class WorldTable extends Component {
  state = {
    countries: [],
  };
  async componentDidMount() {
    const res = await axios.get("https://api.covid19api.com/summary");
    console.log(res.data.Countries);

    this.setState({
      countries: res.data.Countries,
    });
  }

  render() {
    const { countries } = this.state;
    return (
      <div className="card">
        <div className="card-header">World</div>
        <div class="table-wrapper-scroll-y my-custom-scrollbar">
          <table className="table" id="dtVerticalScrollExample">
            <thead className="text-secondary">
              <tr>
                <th className="header th-sm">Country</th>

                <th className="header th-sm">Total Confirmed</th>
                <th className="header th-sm">Total Deaths</th>
                <th className="header th-sm">Total Recovered</th>
              </tr>
            </thead>
            <tbody className="tbody text-secondary">
              {countries.map((country) => (
                <tr>
                  <td>
                    <small>{country.Country}</small>
                  </td>

                  <td>
                    <small>{country.TotalConfirmed}</small>
                  </td>
                  <td>
                    <small>{country.TotalDeaths}</small>
                  </td>
                  <td>
                    <small>{country.TotalRecovered}</small>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
