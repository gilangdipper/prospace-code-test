import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import FormCompany from './FormCompany';
import FormOffice from './FormOffice';
import ListCard from './ListCard';

const Wrapper = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

const LeftWrapper = styled.div`
  flex: 50%;
  padding: 0 10px;
  border-right: 1px solid #e8e8e8;
  margin: 20px 0;
`;

const RightWrapper = styled.div`
  flex: 50%;
  padding: 0 10px;
  margin: 20px 0;
`;

const FullWrapper = styled.div`
  flex: 100%;
  border-top: 1px solid #e8e8e8;
  margin: 0 10px;
`;

class OverView extends Component {

  render() {
    return (
      <Wrapper>
        <LeftWrapper>
          <FormCompany />
        </LeftWrapper>
        <RightWrapper>
          <FormOffice />
        </RightWrapper>
        <FullWrapper>
          <ListCard />
        </FullWrapper>
      </Wrapper>
    );
  }
}

export default OverView;
