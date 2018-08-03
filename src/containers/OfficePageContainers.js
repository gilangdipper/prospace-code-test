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
};

const mapStateToProps = (state) => ({
  company: state.companies.filter(item => {
    console.log('ll', item.id, state.filterCompany, item.id === state.filterCompany);
    return item.id === state.filterCompany;
  })
});

const OfficePageContainers = connect(
  mapStateToProps,
  mapDispatchToProps
)(OfficePage);

export default OfficePageContainers;
