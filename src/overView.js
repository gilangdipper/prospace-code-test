import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd';

class overView extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <Button type="primary">Button</Button> Ant Design Button with primary color defined in ant-theme-vars.less 
        </p>
      </div>
    );
  }
}

export default overView;