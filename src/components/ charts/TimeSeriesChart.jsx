import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { timeFormat } from "d3-time-format";

const format = timeFormat("%Y-%m-%d %H:%M:%S");

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const tooltipStyles = {
  background: "#fff",
  padding: "8px",
  border: "1px solid",
};

function CustomTooltip({ payload, label, active }) {
  if (active) {
    return (
      <div style={tooltipStyles}>
        <p className="label">{`date:${format(
          payload[0].payload.date
        )} / price: ${payload[0].payload.price} USD`}</p>
      </div>
    );
  }

  return null;
}

function TimeSeriesChart({ data }) {
  const prices = data.map((d) => d.price);
  const minPrice = Math.floor(Math.min(...prices));
  const maxPrice = Math.ceil(Math.max(...prices));

  return (
    <LineChart
      width={1000}
      height={300}
      data={data}
      style={styles}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" tickFormatter={timeFormat("%Y-%m-%d")} />
      <YAxis domain={[minPrice, maxPrice]} />
      <Tooltip content={<CustomTooltip />} />
      <Line type="monotone" dataKey="price" stroke="#8884d8" />
    </LineChart>
  );
}

export default TimeSeriesChart;
