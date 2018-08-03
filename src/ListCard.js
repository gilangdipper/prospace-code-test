import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import { Card } from 'antd';


const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  .ant-card {
    width: calc(100% / 2 - 10px);
    margin: 0 5px 5px 5px;
  }
`;

class ListCard extends Component {
  render() {
    return (
      <CardWrapper>
        <Card title="Card title" extra={<a href="#">More</a>}>
					<p>Card content</p>
					<p>Card content</p>
					<p>Card content</p>
				</Card>
        <Card title="Card title" extra={<a href="#">More</a>}>
					<p>Card content</p>
					<p>Card content</p>
					<p>Card content</p>
				</Card>
        <Card title="Card title" extra={<a href="#">More</a>}>
					<p>Card content</p>
					<p>Card content</p>
					<p>Card content</p>
				</Card>
      </CardWrapper>
    );
  }
}

export default ListCard;
