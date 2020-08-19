import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";
import covid from "../Sections/covid.json";
let Total_Recovered = 0;
let Total_Death = 0;
let Active_Cases = 0;
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
});
const state = {
  labels: ["ህይዎታቸው ያለፈ", "ያገገሙ", "በህክምና ላይ ያሉ"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: ["#f65164", "#5468b3", "#ffb300"],
      hoverBackgroundColor: ["#941f2d", "#28335c", "#8a640b"],
      data: [Total_Death, Total_Recovered, Active_Cases],
    },
  ],
};

export default class ChartJsPie extends React.Component {
  render() {
    return (
      <div>
        <Pie
          data={state}
          options={{
            title: {
              display: false,
              text: "Average Rainfall per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    );
  }
}
