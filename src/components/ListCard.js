import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import { Card, Icon } from 'antd';

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  .ant-card {
    width: calc(100% / 2 - 10px);
    margin: 0 5px 10px 5px;

    .ant-card-head-title {
      font-size: 20px;
      font-weight: 700;
    }

    .ant-card-extra {
      font-size: 20px;
    }
  }
`;

export const CardTitle = styled.p`
	font-size: 30px;
  margin-bottom: 12px;
  width: 100%;
`;

const SectionTitle = styled.p`
  font-weight: 700;
  margin: 0;
`;

class ListCard extends Component {
  render() {
    const { companies, removeCompany } = this.props;
    const closeButton = id => 
      <a onClick={()=> removeCompany(id)}>
        <Icon type="close-circle" />
      </a>;

    const linkTitle = item =>
      <a href={`company/${item.id}`}>
        {item.name}
      </a>;

    return (
      <CardWrapper>
        <CardTitle>Companies</CardTitle>

        {companies.map((item, i) =>
          <Card key={i} title={linkTitle(item)} extra={closeButton(item.id)}>
            <SectionTitle>Addres :</SectionTitle>
            <p>{item.address}</p>
            <SectionTitle>Revenue :</SectionTitle>
            <p>{item.revenue}</p>
            <SectionTitle>Phone No :</SectionTitle>
            <p>{`(${item.phoneNumber.code}) ${item.phoneNumber.number}`}</p>
          </Card>
        )}
        
      </CardWrapper>
    );
  }
}

export default ListCard;
