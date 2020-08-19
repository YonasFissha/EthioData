import React, { Component } from "react";
import covid from "../Sections/covid.json";
let Total_Recovered = 0;
let Total_Death = 0;
let Active_Cases = 0;
let Critical = 0;
covid.map((co) => {
  if (co.Total_Deaths > Total_Death) {
    Total_Death = co.Total_Deaths;
  }
  if (co.Total_Recovered > Total_Recovered) {
    Total_Recovered = co.Total_Recovered;
  }
  if (co.Active_Patients > Active_Cases) {
    Active_Cases = co.Active_Patients;
  }
  if (co.Critical > Critical) {
    Critical = co.Critical;
  }
});
export default class Cards extends Component {
  state = {
    Value: "",
  };

  componentDidMount() {
    const { type } = this.props;
    if (type == "Death") {
      this.setState({
        Value: Total_Death,
      });
    }
    if (type == "Recovered") {
      this.setState({
        Value: Total_Recovered,
      });
    }
    if (type == "Active") {
      this.setState({
        Value: Active_Cases,
      });
    }
  }
  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  render() {
    const { title, icon } = this.props;
    const { Value } = this.state;
    return (
      <div className="card h-100 " style={{ backgroundColor: "#5468b3" }}>
        <div className="m-2 text-center">
          <h1 style={{ color: "#DFDFEF" }}>አንዳንድ እውነታዎች</h1>
          <div>
            <p className="confirmedp">
              {this.numberWithCommas(
                Active_Cases + Total_Recovered + Total_Death
              )}{" "}
            </p>
            <p className="smallConfiremd">ቫይረሱ የተገኘባቸው</p>
          </div>
          <div>
            <p className="Tcritical">{this.numberWithCommas(Critical)} </p>
            <p className="smallConfiremd">ጽኑ ህሙማን</p>
          </div>
          <div>
            <p className="dead">{this.numberWithCommas(Total_Death)} </p>
            <p className="smallConfiremd">ህይዎታቸው ያለፈ</p>
          </div>
          <div>
            <p className="tActive">{this.numberWithCommas(Active_Cases)} </p>
            <p className="smallConfiremd">በህክምና ላይ ያሉ</p>
          </div>
          <div>
            <p className="TRecovered">
              {this.numberWithCommas(Total_Recovered)}{" "}
            </p>
            <p className="smallConfiremd">ያገገሙ</p>
          </div>
        </div>
      </div>
    );
  }
}
