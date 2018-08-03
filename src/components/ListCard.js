import React, { Component, Fragment } from 'react';
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

export const SectionTitle = styled.p`
  font-weight: 700;
  margin: 0;
`;

class ListCard extends Component {

  renderRemoveButton = (id, handleOnClick) => 
    <a onClick={()=> handleOnClick(id)}>
      <Icon type="close-circle" />
    </a>;

  renderlinkTitle = item =>
    <a href={`company/${item.id}`}>
      {item.name}
    </a>;

  renderCompanyCards = (companies, removeCompany) =>
    <Fragment>
      <CardTitle>Companies</CardTitle>
      {companies.map((item, i) =>
        <Card key={i} title={this.renderlinkTitle(item)} extra={this.renderRemoveButton(item.id, removeCompany)}>
          <SectionTitle>Addres :</SectionTitle>
          <p>{item.address}</p>
          <SectionTitle>Revenue :</SectionTitle>
          <p>{item.revenue}</p>
          <SectionTitle>Phone No :</SectionTitle>
          <p>{`(${item.phoneNumber.code}) ${item.phoneNumber.number}`}</p>
        </Card>
      )}
    </Fragment>

  
    renderOfficeCards = (offices, removeOffice) => 
      <Fragment>
        <CardTitle>Companies</CardTitle>
        {offices.map((item, i) =>
          <Card key={i} title={item.name} extra={this.renderRemoveButton(item.id, removeOffice)}>
            <SectionTitle>Location :</SectionTitle>
            <p style={{ marginBottom: 0 }}>Lat - {item.location.lat}</p>
            <p>Long - {item.location.lng}</p>
            <SectionTitle>Office Start Date :</SectionTitle>
            <p>{item.date}</p>
          </Card>
        )}
      </Fragment>

  renderCard = () => {
    const { companies, offices, removeCompany, removeOffice } = this.props;

    if (companies) {
      return this.renderCompanyCards(companies, removeCompany);
    } else if (offices) {
      return this.renderOfficeCards(offices, removeOffice);
    } else return null;
  };

  render() {
    return (
      <CardWrapper>
        {this.renderCard()}
      </CardWrapper>
    );
  }
}

export default ListCard;
