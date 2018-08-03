import * as types from '../constants/ActionTypes';

export const addCompany = company => ({ 
	type: types.ADD_COMPANY, 
	company: {
		...company,
		id: `cmp${Math.floor(Math.random() * 10000) + 1}`
	} 
});
export const removeCompany = id => ({ type: types.REMOVE_COMPANY, id });

export const addOffice = company => ({ 
	type: types.ADD_OFFICE, 
	company: {
		...company,
		id: `ofc${Math.floor(Math.random() * 10000) + 1}`
	} 
});
export const removeOffice = id => ({ type: types.REMOVE_OFFICE, id });
export const getOffices = idCompany => ({ type: types.GET_OFFICES, idCompany });

export const getCompany = idCompany => ({ type: types.FILTER_COMPANY, idCompany });
