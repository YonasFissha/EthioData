import React, { Component } from "react";
import covid from "./covid.json";
import ReactPaginate from "react-paginate";
import ChartJsPie from "../Charts/ChartJsPie";
import ChartJsLine from "../Charts/ChartJsLine";
import ChartJsBar from "../Charts/ChartJsBar";
import Cards from "../Charts/Cards";
import WorldTable from "../Charts/WorldTable";
export default class Covid extends Component {
  state = {
    offset: 0,
    data: [],
    perPage: 12,
    currentPage: 0,
    color: "#2f3c6b",
  };
  componentDidMount() {
    this.recieveData();
  }
  recieveData = () => {
    const slice = covid.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );

    const postData = slice.map((pd) => (
      <React.Fragment>
        <tr className="text-secondary">
          <td>
            <strong>
              <small>{pd.Date}</small>
            </strong>
          </td>

          <td>
            <strong>
              <small>+ {pd.Today_Cases}</small>
            </strong>
          </td>
          <td>
            <small>{pd.Total_Cases}</small>
          </td>
          <td>
            <small>{pd.Total_Recovered}</small>
          </td>
          <td>
            <small>+ {pd.Today_Deaths}</small>
          </td>
          <td>
            <small>{pd.Total_Deaths}</small>
          </td>
          <td>
            <small>{pd.Critical}</small>
          </td>
          <td>
            <small>{pd.Active_Patients}</small>
          </td>
          <td>
            <small>{pd.Total_Test}</small>
          </td>
        </tr>
      </React.Fragment>
    ));
    this.setState({
      pageCount: Math.ceil(covid.length / this.state.perPage),
      postData,
    });
  };

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.recieveData();
      }
    );
  };

  render() {
    return (
      <div>
        <div className="row ">
          <div className="col-md-4 mb-3 mt-3 ">
            <Cards></Cards>
          </div>

          <div className="col-md-8 mb-3 mt-3">
            <div className="row">
              <div className="col-md-12 w-100 mb-2">
                <div className="card">
                  <div className="card-header">
                    <strong style={{ color: "#73879C" }}>
                      የቫይረሱ ስርጭት በክልሎች
                    </strong>
                  </div>
                  <div className="p-2">
                    <ChartJsBar />
                  </div>
                </div>
              </div>

              <div className="col-md-12 w-100">
                <div className="card ">
                  <div className="card-header">
                    <strong style={{ color: "#73879C" }}>
                      አጠቃላይ የበሽታው የስርጭት መጠን የግዜ ሰሌዳ
                    </strong>
                  </div>
                  <ChartJsLine />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3" style={{ height: "400px" }}>
          <div className="col-md-6 " style={{ height: "300px" }}>
            <div className="card ">
              <div className="card-header">
                <strong style={{ color: "#73879C" }}>ኢትዮጵያ</strong>
              </div>
              <div className="p-2">
                <ChartJsPie />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <WorldTable></WorldTable>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <div className="card  border-2 scrollme">
              <div className="card-header">
                <strong style={{ color: "#73879C" }}>በየቀኑ የተመዘገቡ ቁጥሮች</strong>
              </div>
              <table class="table ">
                <thead>
                  <tr className="text-secondary">
                    <th className="header" scope="col">
                      Date
                    </th>

                    <th className="header" scope="col">
                      New Cases
                    </th>
                    <th className="header" scope="col">
                      Total Cases
                    </th>
                    <th className="header" scope="col">
                      Recovered
                    </th>
                    <th className="header" scope="col">
                      New Deaths
                    </th>
                    <th className="header" scope="col">
                      Total Deaths
                    </th>
                    <th className="header" scope="col">
                      Critical
                    </th>
                    <th className="header" scope="col">
                      Active
                    </th>
                    <th className="header" scope="col">
                      Test
                    </th>
                  </tr>
                </thead>
                <tbody>{this.state.postData}</tbody>
              </table>
              <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={this.state.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
