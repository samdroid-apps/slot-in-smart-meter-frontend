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

const Footer = () => {
  return <div className="Footer">
    <p>Built with love by the moni team in Canberra</p>
    <p>Icons designed by Tracy Tam from Flaticon</p>
  </div>;
}

interface IProps {
  onActivateDetails: (name: string) => any,
  blur: boolean,
}
class Home extends React.PureComponent<IProps> {
  public render() {
    const {
      onActivateDetails,
      blur,
    } = this.props;

    return <div className={ "Home" + (blur ? " Home--blur" : "") }>
      <Header />
      <div className="HomeTitle HomeTitle--first">
        Cormac,<br/>
        you're using <b>31c</b> electricty per hour:
      </div>
      <UsageGraph />
      <div className="HomeTitle">
        you're got <b>three</b> devices:
      </div>
      <HomeTable onActivateDetails={onActivateDetails} />
      <Footer />
    </div>;
  }
}

export default Home;
