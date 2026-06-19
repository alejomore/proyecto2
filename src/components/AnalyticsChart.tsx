import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import type { Root2 } from "../types/DashboardTypes";

interface AnalyticsChartProps {
  title: string;
  data: Root2[];
  groupBy: keyof Root2;
  metric: keyof Root2;
  layout?: "vertical"; 
}

function AnalyticsChart({
  title,
  data,
  groupBy,
  metric,
  layout,
}: AnalyticsChartProps) {
  if (!data.length) {
    return (
      <div className="chart-card">
        <h3>{title}</h3>
        <p>No data available.</p>
      </div>
    );
  }

  const groupedData = Object.values(
    data.reduce((acc, item) => {
      const group = String(item[groupBy]);
      const value = Number(item[metric]);

      if (!acc[group]) {
        acc[group] = {
          name: group,
          total: 0,
          count: 0,
        };
      }

      acc[group].total += value;
      acc[group].count++;

      return acc;
    }, {} as Record<
      string,
      {
        name: string;
        total: number;
        count: number;
      }
    >)
  ).map((item) => ({
    name: item.name,
    value: item.total / item.count,
  }));

  return (
    <div className="chart-card">
      <h3>{title}</h3>

      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={groupedData}
          layout={layout}
        >
          <CartesianGrid strokeDasharray="3 3" />

            <XAxis type={layout ? "number" : "category"} dataKey={layout ? undefined : "name"} />
            <YAxis type={layout ? "category" : "number"} dataKey={layout ? "name" : undefined} />
          <Tooltip />

          <Bar
            type="monotone"
            dataKey="value"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AnalyticsChart;