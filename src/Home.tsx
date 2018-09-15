import * as React from 'react';

import './Home.css';

import HomeTable from './HomeTable';
import UsageGraph from './UsageGraph';


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

interface IProps {
  onActivateDetails: (name: string) => any,
}
class Home extends React.PureComponent<IProps> {
  public render() {
    return <div className="Home">
      <Header />
      <div className="HomeTitle HomeTitle--first">
        Cormac,<br/>
        you're using <b>31c</b> electricty per hour:
      </div>
      <UsageGraph />
      <div className="HomeTitle">
        you're got <b>three</b> devices:
      </div>
      <HomeTable onActivateDetails={this.props.onActivateDetails} />
    </div>;
  }
}

export default Home;
