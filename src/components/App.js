import React, { Component } from 'react';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import OverView from './OverView';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={OverView} />
          {/* <Route exact path="/dynamic" component={AsyncDynamicPAge} /> */}
          {/* <Route component={AsyncNoMatch} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
