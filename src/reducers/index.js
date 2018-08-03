import { combineReducers } from 'redux';
import companies from './companies';
import offices from './offices';
import filterCompany from './filterCompany';

const rootReducer = combineReducers({
  companies,
  offices,
  filterCompany
});

export default rootReducer;
