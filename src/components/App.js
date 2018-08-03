import React, { Component } from 'react';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import OverViewContainers from '../containers/OverViewContainers';
import OfficePageContainers from '../containers/OfficePageContainers';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={OverViewContainers} />
          <Route exact path="/company/:id" component={OfficePageContainers} />
          {/* <Route component={AsyncNoMatch} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
