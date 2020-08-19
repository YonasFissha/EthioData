import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import covid from "../Sections/covid.json";

export default function ChartJsLine() {
  const [Data, setData] = useState({});
  const chart = () => {
    const Date = [];
    const Total_Death = [];
    const Active = [];
    const Recovered = [];
    covid.map((co) => {
      Date.push(co.Date);
      Total_Death.push(co.Total_Deaths);
      Active.push(co.Active_Patients);
      Recovered.push(co.Total_Recovered);
    });

    setData({
      labels: Date,
      datasets: [
        {
          label: "ህይዎታቸው ያለፈ",
          data: Total_Death,
          fill: false,
          lineTension: 0.5,
          borderColor: "#f65164",
          borderWidth: 2,
        },
        {
          label: "በህክምና ላይ ያሉ",
          data: Active,
          fill: false,
          lineTension: 0.5,
          borderColor: "#ffb300",
          borderWidth: 2,
        },
        {
          label: "ያገገሙ",
          data: Recovered,
          fill: false,
          lineTension: 0.5,
          borderColor: "#5468b3",
          borderWidth: 2,
        },
      ],
    });
  };
  useEffect(() => {
    chart();
  }, []);
  return (
    <div>
      <Line
        data={Data}
        options={{
          responsive: true,
          title: { text: "Total Deaths", display: false },
        }}
      ></Line>
    </div>
  );
}
