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
      detailsActive: false,
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
  }

  private handleCloseDetails = () => {
    this.setState({
      detailsActive: false,
    });
  }
}

export default App;
