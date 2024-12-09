import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DataVisualization = ({ data }: { data: Array<[string, string | number]> }) => {
  // Transform data into format needed by recharts
  const chartData = data.map(([label, value], index: number) => ({
    name: label,
    value: typeof value === 'string' ? parseFloat(value) : value
  }));

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 10, right: 30, left: 20, bottom: 30 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name"
            angle={-45}
            textAnchor="end"
            height={60}
          />
          <YAxis />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#4F46E5"
            strokeWidth={2}
            dot={{ fill: '#4F46E5', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DataVisualization;