import * as React from 'react';
import * as V from 'victory';

import './App.css';

import television from './icons/television.svg';
import washerMachine from './icons/washer-machine.svg';

import oven from './icons/oven.svg';

const Header = () => {
  return <header className="Header">
    <div className="Header__inner">
      <div className="Header__logo">
        moni
      </div>
      <button className="Button">
        Buy Now
      </button>
    </div>
  </header>;
}

interface IStatusDotProps {
  on?: boolean,
  visible?: boolean,
}
const StatusDot : React.SFC<IStatusDotProps>  = ({ on = true, visible = true }) => {
  if (!visible) {
    return <div className="StatusDot" />;
  }

  return <div className={ "StatusDot " + (on ? "StatusDot--on" : "StatusDot--off") }>
    <div className="StatusDot__dot" />
    <div className="StatusDot__pulse" />
  </div>;
}

interface IAppTableRowProps {
  icon?: string,
  name: string,
  cost: string,
  on?: boolean,
  header?: boolean,
}
const AppTableRow : React.SFC<IAppTableRowProps> = ({
  icon,
  name,
  cost,
  on = true,
  header = false,
}) => {
  return <div className={ "AppTableRow " + (header ? "AppTableRow--header" : "AppTableRow--normal") }>
    <div className="AppTableRow__cell AppTableRow__cell--icon">
      {icon && <img src={icon} /> }
    </div>
    <div className="AppTableRow__cell AppTableRow__cell--name">
      {name}
    </div>
    <div className="AppTableRow__cell AppTableRow__cell--cost">
      {cost}
    </div>
    <div className="AppTableRow__cell AppTableRow__cell--status">
      { header ? <StatusDot visible={false} /> : <StatusDot on={on} /> }
    </div>
  </div>;
}

const AppTable = () => {
  return <div className="AppTable">
    <AppTableRow name="name" cost="cost (per hour)" header={true} />
    <AppTableRow name="television" cost="300c" icon={television} />
    <AppTableRow name="washing machine" cost="0c" icon={washerMachine} on={false} />
    <AppTableRow name="oven" cost="10c" icon={oven} />
  </div>;
}


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

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <div className="AppTitle AppTitle--first">
          Cormac,<br/>
          you're using <b>31c</b> electricty per hour:
        </div>
        <UsageGraph />
        <div className="AppTitle">
          you're got <b>three</b> devices:
        </div>
        <AppTable />
      </div>
    );
  }
}

export default App;
