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
const animate = {
  duration: 2000,
  onLoad: { duration: 1000 }
};
const UsageGraph = () => {
  return <div className="UsageGraph">
    <svg style={{height: 0}}>
      <defs>
        <linearGradient id="myGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(74, 167, 245, 0.2)"/>
          <stop offset="100%" stopColor="rgba(74, 167, 245, 0.0)"/>
        </linearGradient>
      </defs>
      <filter id="dropshadow-dot" x="-50%" y="-50%" height="200%" width="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="0" dy="2" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.5"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="dropshadow-line" x="-50%" y="-50%" height="200%" width="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="5"/>
        <feOffset dx="0" dy="5" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.2"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </svg>
    <V.VictoryChart
      width={600}
      domainPadding={{x: 5, y: 5}}
    >
      <V.VictoryArea
        interpolation="natural"
        data={usageGraphData}
        animate={animate}
        style={{ data: { fill: "url(#myGradient)" } }}
      />
      <V.VictoryLine
        interpolation="natural"
        data={usageGraphData}
        animate={animate}
        style={{
          data: {
            filter: "url(#dropshadow-line)",
            stroke: '#4aa8f5',
            strokeLinecap: "round",
            strokeWidth: 5,
          }
        }}
      />
      <V.VictoryScatter
        data={usageGraphData}
        style={{
          data: {
            fill: "#4aa8f5",
            filter: "url(#dropshadow-dot)",
            stroke: 'white',
            strokeWidth: 2,
          }
        }}
        size={9}
      />
      <V.VictoryAxis
        tickValues={[14, 16, 18, 20]}
        tickFormat={xTickFormat}
        style={{
          axis: { stroke: "#4aa8f5" },
          tickLabels: { fill: '#676767', fontSize: 12, fontWeight: 'bold', fontFamily: "'M PLUS Rounded 1c', sans-serif" },
        }}
      />
    </V.VictoryChart>
  </div>
}

export default UsageGraph;
