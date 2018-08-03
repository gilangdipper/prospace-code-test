import { connect } from 'react-redux';
import OverView from '../components/OverView';
import { 
  addCompany,
  removeCompany,
  addOffice
} from '../actions';

const mapStateToProps = (state) => ({
  companies: state.companies
});

const mapDispatchToProps = {
  addCompany,
  removeCompany,
  addOffice
};

const OverViewContainers = connect(
  mapStateToProps,
  mapDispatchToProps
)(OverView);

export default OverViewContainers;
