import React from 'react';
import PropTypes from 'prop-types';

import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  Legend,
  Tooltip,
} from 'recharts';

const StackedAreaChart = ({ data, colors }) => {
  const gradients = [];
  const lines = [];

  const myKeys = Object.keys(data[0]);
  myKeys.forEach((key, index) => {
    if (key !== 'name') {
      lines.push(
        <Area
          type="monotone"
          key={`${myKeys[index]}`}
          dataKey={`${myKeys[index]}`}
          stroke={colors[index]}
          fillOpacity={1}
          fill={`url(#color${index})`}
        />
      );
      gradients.push(
        <linearGradient
          key={`color${index}`}
          id={`color${index}`}
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="5%" stopColor={colors[index]} stopOpacity={0.8} />
          <stop offset="95%" stopColor={colors[index]} stopOpacity={0.1} />
        </linearGradient>
      );
    }
  });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        margin: 'auto',
      }}
    >
      <AreaChart width={730} height={250} data={data}>
        <Legend
          layout="vertical"
          iconType="square"
          verticalAlign="top"
          align="left"
        />
        <defs>{gradients}</defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        {lines}
      </AreaChart>
    </div>
  );
};

StackedAreaChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default StackedAreaChart;
