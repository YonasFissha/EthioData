import React, { Component } from "react";
import covid from "./covid.json";
import { firestoreConnect } from "react-redux-firebase";
class Education extends Component {
  state = {
    Date: "",
    Today_Test: "",
    Total_Test: "",
    New_Cases: "",
    Total_Cases: "",
    Today_Recovered: "",
    Total_Recovered: "",
    Today_Deaths: "",
    Total_Deaths: "",
    Critical: "",
    Active_Patients: "",
  };
  componentDidMount() {
    // const { firestore } = this.props;
    // covid.map((co) => {
    //   const data = {
    //     Date: co.Date,
    //     Today_Test: co.Today_Test,
    //     Total_Test: co.Total_Test,
    //     Today_Cases: co.Today_Cases,
    //     Total_Cases: co.Total_Cases,
    //     Today_Recovered: co.Today_Recovered,
    //     Total_Recovered: co.Total_Recovered,
    //     Today_Deaths: co.Today_Deaths,
    //     Total_Deaths: co.Today_Deaths,
    //     Critical: co.Critical,
    //     Active_Patients: co.Active_Patients,
    //   };
    //   firestore.add("Covid_Daily", data).then((err) => console.log(err));
    // });
    // this.props.history.push("/");
  }
  render() {
    return (
      <div>
        <h1>This is Education </h1>
      </div>
    );
  }
}
export default firestoreConnect()(Education);
