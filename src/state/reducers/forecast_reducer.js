import {
  GET_FORECAST
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_FORECAST:
      console.log('GET_FORECAST | action.payload ', action.payload);

      let { data } = action.payload
      //
      // let temp = {...state.temp}
      //
      // temp[unit].current = data.main.temp
      // temp[unit].min = data.main.temp_min
      // temp[unit].max = data.main.temp_max

      return {
        city: data.city,
        list: data.list
      };
    default:
      return state;
  }
}
