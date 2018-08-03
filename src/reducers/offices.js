import { ADD_OFFICE, REMOVE_OFFICE, GET_OFFICES } from '../constants/ActionTypes';

const initialState = [
	{ id: 'ofc2929', name: 'Prospace', location: {lat: '021', lng: '8812272'}, date: '8/29/1992', company: 'cmp2929' },
	{ id: 'ofc3030', name: 'Prospace Test', location: {lat: '021', lng: '8812272'}, date: '8/29/1993', company: 'cmp3030' }
];

export default function currencies(state = initialState, payload) {
  switch (payload.type) {
    case ADD_OFFICE:
      return [
        ...state,
        {
          ...payload.office
				}
			]

    case REMOVE_OFFICE:
			return [
        ...(state.filter(office =>
					office.id !== payload.id
				))
			]
		
		case GET_OFFICES:
			return [
        ...(state.filter(office =>
					office.company === payload.idCompany
				))
			]

    default:
      return state
  }
};
