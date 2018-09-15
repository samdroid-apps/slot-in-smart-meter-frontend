import * as React from 'react';
import * as V from 'victory';

import './UsageGraph.css';

const usageGraphData = [
    {x: 14, y: 9},
    {x: 15, y: 10},
    {x: 16, y: 35},
    {x: 17, y: 40},
    {x: 18, y: 38},
    {x: 19, y: 35},
    {x: 20, y: 31}
];
const xTickFormat = (x: number) => {
  if (x > 12) {
    return (x - 12) + 'pm';
  } else {
    return x + 'am';
  }
}
const UsageGraph = () => {
  return <div className="UsageGraph">
    <svg style={{height: 0}}>
      <defs>
        <linearGradient id="myGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#f0dac0"/>
          <stop offset="100%" stopColor="#f6a970"/>
        </linearGradient>
      </defs>
    </svg>
    <V.VictoryChart
      width={600}
      domainPadding={{x: 0, y: 5}}
    >
      <V.VictoryAxis
        tickValues={[14, 16, 18, 20]}
        tickFormat={xTickFormat}
        style={{
          axis: { stroke: "transparent" },
          tickLabels: { fill: '#676767', fontSize: 12, fontWeight: 'bold', fontFamily: "'M PLUS Rounded 1c', sans-serif" },
        }}
      />
      <V.VictoryArea
        interpolation="natural"
        data={usageGraphData}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 }
        }}
        style={{ data: { fill: "url(#myGradient)" } }}
      />
      <V.VictoryAxis
        dependentAxis={true}
        tickValues={[0, 10, 20, 30]}
        padding={0}
        style={{
          axis: { stroke: "transparent" },
          grid: { strokeWidth: 1, opacity: 0.6, stroke: "black" },
          tickLabels: { fill: '#676767', fontSize: 12, fontWeight: 'bold', fontFamily: "'M PLUS Rounded 1c', sans-serif" },
        }}
      />
    </V.VictoryChart>
  </div>
}

export default UsageGraph;
