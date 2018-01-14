import {
  GET_AIR_QUALITY
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_AIR_QUALITY:
      console.log('GET_AIR_QUALITY | action.payload ', action.payload);
      let { data , location, time } = action.payload
      return {
        data,
        location,
        time
      };
    default:
      return state;
  }
}
