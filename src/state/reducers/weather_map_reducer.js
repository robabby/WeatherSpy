import {
  GET_WEATHER_MAP
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_WEATHER_MAP:

      console.log("GET_WEATHER_MAP | action.payload", action.payload);

      return {
        image: action.payload
      };
    default:
      return state;
  }
}
