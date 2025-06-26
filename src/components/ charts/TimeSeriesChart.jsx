import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const tooltipStyles = {
  background: "#fff",
  padding: "8px",
  border: "1px solid",
};

function CustomTooltip({ payload, label, active }) {
  if (active) {
    return (
      <div style={tooltipStyles}>
        <p className="label">{`price: ${payload[0].value.toFixed(2)}`}</p>
      </div>
    );
  }

  return null;
}

function TimeSeriesChart({ data }) {
  return (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip content={<CustomTooltip />} />
      <Line type="monotone" dataKey="price" stroke="#8884d8" />
    </LineChart>
  );
}

export default TimeSeriesChart;
