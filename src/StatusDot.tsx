import * as React from 'react';

import './StatusDot.css';


interface IProps {
  on?: boolean,
  visible?: boolean,
}
class StatusDot extends React.PureComponent<IProps> {
  public render() {
    const { on = true, visible = true } = this.props;

    if (!visible) {
      return <div className="StatusDot" />;
    }

    const cn = "StatusDot " + (on ? "StatusDot--on" : "StatusDot--off");
    return <div className={cn}>
      <div className="StatusDot__dot" />
      <div className="StatusDot__pulse" />
    </div>;
  }
}

export default StatusDot;
