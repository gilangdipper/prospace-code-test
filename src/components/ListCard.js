import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Card, Icon, Modal } from 'antd';
import _ from 'lodash';

const confirm = Modal.confirm;

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

const DefaultMessage = styled.p`
  font-size: 16px;
  font-style: italic;
  text-align: center;
  margin-top: 10px;
  width: 100%;
`;

class ListCard extends Component {

  renderRemoveButton = payload => 
    <a onClick={()=> this.handleClickRemoveButton(payload)}>
      <Icon type="close-circle" />
    </a>;

  handleClickRemoveButton = payload => {
    const { item, handleOnClick } = payload;
    confirm({
      title: `Are you sure delete ${item.name} data?`,
      content: 'data will delete permanently...',
      okText: 'Yes',
      okType: 'danger',
      onOk() {
        console.log('OK');
        handleOnClick(item.id);
      },
      onCancel() {
        console.log('Cancel');
      }
    });
  }

  renderlinkTitle = item =>
    <a href={`company/${item.id}`}>
      {item.name}
    </a>;

  renderCompanyCards = (companies, removeCompany) =>
    (!_.isEmpty(companies)
      ? <Fragment>
          <CardTitle>Companies</CardTitle>
          {companies.map((item, i) =>
            <Card 
              key={i} 
              title={this.renderlinkTitle(item)} 
              extra={this.renderRemoveButton({
                item: item, 
                handleOnClick: removeCompany
              })}
            >
              <SectionTitle>Addres :</SectionTitle>
              <p>{item.address}</p>
              <SectionTitle>Revenue :</SectionTitle>
              <p>{item.revenue}</p>
              <SectionTitle>Phone No :</SectionTitle>
              <p>{`(${item.phoneNumber.code}) ${item.phoneNumber.number}`}</p>
            </Card>
          )}
        </Fragment>
      : <DefaultMessage>Theres's no Company data!</DefaultMessage>);

  renderOfficeCards = (offices, removeOffice) => 
    (!_.isEmpty(offices)
      ? <Fragment>
          <CardTitle>Offices</CardTitle>
          {offices.map((item, i) =>
            <Card 
              key={i} 
              title={item.name} 
              extra={this.renderRemoveButton({
                item: item, 
                handleOnClick: removeOffice
              })}
            >
              <SectionTitle>Location :</SectionTitle>
              <p style={{ marginBottom: 0 }}>Lat - {item.location.lat}</p>
              <p>Long - {item.location.lng}</p>
              <SectionTitle>Office Start Date :</SectionTitle>
              <p>{item.date}</p>
            </Card>
          )}
        </Fragment>
      : <DefaultMessage>Theres's no Office data!</DefaultMessage>);
    

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
