import * as React from 'react';

import StatusDot from './StatusDot';

import IconOven from './icons/oven.svg';
import IconTelevision from './icons/television.svg';
import IconWasherMachine from './icons/washer-machine.svg';

import './HomeTable.css';


interface IHomeTableRowProps {
  icon?: string,
  name: string,
  cost: string,
  on?: boolean,
  header?: boolean,
  onClick?: () => any,
}
const HomeTableRow : React.SFC<IHomeTableRowProps> = ({
  icon,
  name,
  cost,
  on = true,
  header = false,
  onClick,
}) => {
  return <div
    className={ "HomeTableRow " + (header ? "HomeTableRow--header" : "HomeTableRow--normal") }
    onClick={onClick}
  >
    <div className="HomeTableRow__cell HomeTableRow__cell--icon">
      {icon && <img src={icon} /> }
    </div>
    <div className="HomeTableRow__cell HomeTableRow__cell--name">
      {name}
    </div>
    <div className="HomeTableRow__cell HomeTableRow__cell--cost">
      {cost}
    </div>
    <div className="HomeTableRow__cell HomeTableRow__cell--status">
      { header ? <StatusDot visible={false} /> : <StatusDot on={on} /> }
    </div>
  </div>;
}

interface IProps {
  onActivateDetails: (name: string) => any,
}
class HomeTable extends React.PureComponent<IProps> {
  public render() {
    return <div className="HomeTable">
      <HomeTableRow name="name" cost="cost (per hour)" header={true} />
      <HomeTableRow
        name="television"
        cost="302c"
        icon={IconTelevision}
        onClick={this.handleClick('television')}
      />
      <HomeTableRow
        name="washing machine"
        cost="0c"
        icon={IconWasherMachine}
        on={false}
        onClick={this.handleClick('washing machine')}
      />
      <HomeTableRow
        name="oven"
        cost="10c"
        icon={IconOven}
        onClick={this.handleClick('oven')}
      />
    </div>;
  }

  private handleClick = (name: string) => () => {
    this.props.onActivateDetails(name);
  }
}

export default HomeTable;
