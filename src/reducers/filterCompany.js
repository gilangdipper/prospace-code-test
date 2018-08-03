import { FILTER_COMPANY } from '../constants/ActionTypes'

const filterCompany = (state= '', payload) => {
  switch (payload.type) {
    case FILTER_COMPANY:
      return payload.idCompany
    default:
      return state
  }
}

export default filterCompany