import * as React from 'react';

import './App.css';

import DetailsModal from './DetailsModal';
import Home from './Home';


interface IState {
  detailsActive: boolean,
}
class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      detailsActive: window.location.hash === '#details',
    }
  }

  public render() {
    const { detailsActive } = this.state;

    return <div className="App">
      <Home
        onActivateDetails={this.handleActivateDetails}
        blur={detailsActive}
      />
      <DetailsModal
        onClose={this.handleCloseDetails}
        active={detailsActive}
      />
    </div>;
  }

  private handleActivateDetails = (name: string) => {
    console.log(`handleActivateDetails for ${name}`);
    this.setState({
      detailsActive: true,
    });
    window.location.hash = 'details';
  }

  private handleCloseDetails = () => {
    this.setState({
      detailsActive: false,
    });
    window.location.hash = 'home';
  }
}

export default App;
