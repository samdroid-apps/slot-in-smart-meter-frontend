import * as React from 'react';

import './App.css';

import Home from './Home';

class App extends React.Component {
  public render() {
    return <div className="App">
      <Home onActivateDetails={this.handleActivateDetails} />
    </div>;
  }

  private handleActivateDetails = (name: string) => {
    console.log(`handleActivateDetails for ${name}`);
  }
}

export default App;
