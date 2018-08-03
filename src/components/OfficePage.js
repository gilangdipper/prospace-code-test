import React, { Component } from 'react';
import styled from 'styled-components';
import ListCard from './ListCard';
import { Wrapper, FullWrapper } from './OverView';

const CompanyDetailWrapper = styled.div`
	border-bottom: 1px solid #e8e8e8;

	p {
		font-size: 18px;
		line-height: 20px;
	}
`;

const CompanyTitle = styled.div`
	font-size: 26px;
	font-weight: 700;
	border-bottom: 1px solid #e8e8e8;
	margin-bottom: 10px;
`;

const CompanySection = styled.p`
  font-weight: 700;
	margin: 0;
`;

const DetailCompany = ({ company }) => {
	const companyData = company[0] || {};
	const { name, address, revenue, phoneNumber } = companyData;
	const { code, number } = phoneNumber || {};

	return (companyData
		? <CompanyDetailWrapper>
				<CompanyTitle>{name}</CompanyTitle>
				<CompanySection>Addres :</CompanySection>
				<p>{address}</p>
				<CompanySection>Revenue :</CompanySection>
				<p>{revenue}</p>
				<CompanySection>Phone No :</CompanySection>
				<p>{`(${code}) ${number}`}</p>
			</CompanyDetailWrapper>
		: null
	);
}

class OfficePage extends Component {

	componentWillMount() {
		const { match, getCompany, getOffices } = this.props;
		const idCompany = match.params.id
		getCompany(idCompany);
		getOffices(idCompany);
	}

  render() {
		const { company, offices, removeOffice } = this.props;
    return (
      <Wrapper>
        <FullWrapper>
					<DetailCompany company={company} />
          <ListCard offices={offices} removeOffice={removeOffice}/>
        </FullWrapper>
      </Wrapper>
    );
  }
}

export default OfficePage;
