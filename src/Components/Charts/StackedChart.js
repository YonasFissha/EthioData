import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Cities from "../Sections/Cities.json";
const death = [];
Cities.map((co) => {
  const Town = co.Town;
  const Total_Death = co.Total_Deaths;
  const Total_Cases = co.Total_Cases;
  const Total_Recovered = co.Total_Recovered;
  death.push({ Town, Total_Death, Total_Recovered, Total_Cases });
});
const data = death;

export default class StackedChart extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/90v76x08/";

  render() {
    return (
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Town" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Total_Cases" stackId="a" fill="#82ca9d" />
        <Bar dataKey="Total_Recovered" stackId="a" fill="#8884d8" />
        <Bar dataKey="Total_Death" stackId="a" fill="#FF0000" />
      </BarChart>
    );
  }
}
