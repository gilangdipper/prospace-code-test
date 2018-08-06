import { ADD_OFFICE, REMOVE_OFFICE } from '../constants/ActionTypes';

const initialStateOffice = [];

export default function currencies(state = initialStateOffice, payload) {	
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
