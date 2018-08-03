import { connect } from 'react-redux';
import OfficePage from '../components/OfficePage';
import { 
  removeOffice,
  getCompany,
  getOffices
} from '../actions';

const mapDispatchToProps = {
  removeOffice,
  getCompany,
  getOffices
};

const mapStateToProps = (state) => ({
  company: state.companies.filter(item => item.id === state.filterCompany),
  offices: state.offices
});

const OfficePageContainers = connect(
  mapStateToProps,
  mapDispatchToProps
)(OfficePage);

export default OfficePageContainers;
