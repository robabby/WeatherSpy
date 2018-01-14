import {
  GET_FORECAST
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_FORECAST:
      console.log('GET_FORECAST | action.payload ', action.payload);

      let { data } = action.payload

      return {
        city: data.city,
        list: data.list
      };
    default:
      return state;
  }
}
