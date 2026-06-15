import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import type { Root2 } from "../types/DashboardTypes";

interface ChartCardProps {
  title: string;
  data: Root2[];
}

export const ChartCard = ({ title, data }: ChartCardProps) => {
  const groupedData = Object.values(
    data.reduce((acc, item) => {
      const game = item.Game_Name;

      if (!acc[game]) {
        acc[game] = {
          game,
          battery: 0,
          count: 0,
        };
      }

      acc[game].battery += item["Battery_Drop_%"];
      acc[game].count++;

      return acc;
    }, {} as Record<string, { game: string; battery: number; count: number }>)
  ).map((item) => ({
    game: item.game,
    battery: item.battery / item.count,
  }));

  return (
    <div className="chart-card">
      <h3>{title}</h3>

  <ResponsiveContainer
    width="100%"
    height={300}
  >
    <LineChart data={groupedData}>

      <CartesianGrid strokeDasharray="3 3" />

      <XAxis dataKey="game" />

      <YAxis />

      <Tooltip />

      <Line
        type="monotone"
        dataKey="battery"
      />

    </LineChart>
  </ResponsiveContainer>
</div>
);
}
