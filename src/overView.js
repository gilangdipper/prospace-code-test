import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

const LeftWrapper = styled.div`
  flex: 50%;
`;

const RightWrapper = styled.div`
  flex: 50%;
`;

const FullWrapper = styled.div`
  flex: 100%;
`;


class overView extends Component {
  render() {
    return (
      <Wrapper>
        <LeftWrapper>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
          <Button type="primary">Button</Button> Ant Design Button with primary color defined in ant-theme-vars.less 
          </p>
        </LeftWrapper>
        <RightWrapper>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
          <Button type="primary">Button</Button> Ant Design Button with primary color defined in ant-theme-vars.less 
          </p>
        </RightWrapper>
        <FullWrapper>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
          <Button type="primary">Button</Button> Ant Design Button with primary color defined in ant-theme-vars.less 
          </p>

        </FullWrapper>
      </Wrapper>
    );
  }
}

export default overView;
