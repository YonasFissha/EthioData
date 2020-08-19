import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import covid from "../Sections/covid.json";
const death = [];
covid.map((co) => {
  const date = co.Date;
  const Total_Death = co.Total_Deaths;
  const Active_Patients = co.Active_Patients;
  const Total_Recovered = co.Total_Recovered;
  death.push({ date, Total_Death, Total_Recovered, Active_Patients });
});
const data = death;
const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const toPercent = (decimal, fixed = 0) => `${(decimal * 100).toFixed(fixed)}%`;
const renderTooltipContent = (o) => {
  const { payload, label } = o;
  const total = payload.reduce((result, entry) => result + entry.value, 0);

  return (
    <div className="customized-tooltip-content">
      <p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
        {payload.map((entry, index) => (
          <li key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default class AreaChart1 extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/zsax2hyq/";

  render() {
    return (
      <AreaChart
        width={450}
        height={300}
        data={data}
        stackOffset="expand"
        margin={{
          top: 10,
          right: 5,
          left: 5,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis tickFormatter={toPercent} />
        <Tooltip content={renderTooltipContent} />
        <Area
          type="mono"
          dataKey="Total_Death"
          stackId="1"
          stroke="#000000"
          fill="#FF8042"
        />
        <Area
          type="monotone"
          dataKey="Total_Recovered"
          stackId="1"
          stroke="#000000"
          fill="#FFBB28"
        />
        <Area
          type="monotone"
          dataKey="Active_Patients"
          stackId="1"
          stroke="#000000"
          fill="#00C49F"
        />
      </AreaChart>
    );
  }
}
