import {
  GET_FORECAST
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_FORECAST:
      let { data } = action.payload

      return {
        city: data.city,
        list: data.list
      };
    default:
      return state;
  }
}
