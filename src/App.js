import React, { Component } from 'react';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import overView from './overView';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={overView} />
          {/* <Route exact path="/dynamic" component={AsyncDynamicPAge} /> */}
          {/* <Route component={AsyncNoMatch} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
