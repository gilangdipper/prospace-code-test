import { ADD_OFFICE, REMOVE_OFFICE } from '../constants/ActionTypes';

const initialStateOffice = [
	{ id: 'ofc2929', name: 'Prospace', location: {lat: '021', lng: '8812272'}, date: '8/29/1992', company: 'cmp2929' },
	{ id: 'ofc3030', name: 'Prospace Test', location: {lat: '021', lng: '8812272'}, date: '8/29/1993', company: 'cmp3030' }
];

export default function currencies(state = initialStateOffice, payload) {
	console.log(';;;', payload.type, state);
	
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

    default:
      return state
  }
};
