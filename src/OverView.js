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
  padding-right: 10px;
`;

const RightWrapper = styled.div`
  flex: 50%;
`;

const FullWrapper = styled.div`
  flex: 100%;
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
