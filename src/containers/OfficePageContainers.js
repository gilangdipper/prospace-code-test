import { connect } from 'react-redux';
import OfficePage from '../components/OfficePage';
import { 
  removeOffice,
  getCompany
} from '../actions';

const mapDispatchToProps = {
  removeOffice,
  getCompany
};

const mapStateToProps = (state) => ({
  company: state.companies.filter(item => item.id === state.filterCompany),
  offices: state.offices.filter(item => item.company === state.filterCompany)
});

const OfficePageContainers = connect(
  mapStateToProps,
  mapDispatchToProps
)(OfficePage);

export default OfficePageContainers;
