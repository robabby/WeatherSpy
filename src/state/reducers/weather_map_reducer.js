import {
  GET_WEATHER_MAP
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_WEATHER_MAP:
      return {
        image: action.payload
      };
    default:
      return state;
  }
}
