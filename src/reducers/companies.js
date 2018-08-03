import { ADD_COMPANY, REMOVE_COMPANY } from '../constants/ActionTypes';

const initialState = [
	{ id: 'cmp2929', name: 'Prospace', address: 'jakarta', revenue: '2000', phoneNumber: {code: '021', number: '8812272'} },
	{ id: 'cmp3030', name: 'Prospace Test', address: 'jakarta', revenue: '2000', phoneNumber: {code: '021', number: '8812272'} }
];

export default function currencies(state = initialState, payload) {
  switch (payload.type) {
    case ADD_COMPANY:
      return [
        ...state,
        {
          ...payload.company
				}
			]

    case REMOVE_COMPANY:
			return [
        ...(state.filter(company =>
					company.id !== payload.id
				))
      ]

    default:
      return state
  }
};
