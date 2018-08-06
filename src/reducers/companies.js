import { ADD_COMPANY, REMOVE_COMPANY } from '../constants/ActionTypes';

const initialState = [];

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
