import {
  GET_CURRENT_WEATHER
} from '../actions/types';

const INITIAL_STATE = {
  iconClassName: 'wi wi-owm-day-800',
  coord: {},
  main: {},
  weather: {},
  temp: {
    imperial: {
      current: 0,
      min: 0,
      max: 0
    },
    metric: {
      current: 0,
      min: 0,
      max: 0
    }
  },
  humidity: 0,
  wind: 0
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CURRENT_WEATHER:

      let { data, unit } = action.payload

      let temp = {...state.temp}

      temp[unit].current = data.main.temp
      temp[unit].min = data.main.temp_min
      temp[unit].max = data.main.temp_max

      return {
        coord: data.coord,
        main: data.main,
        weather: data.weather[0],
        temp,
        humidity: data.main.humidity,
        wind: data.wind,
        iconClassName: 'wi wi-owm-' + data.weather[0].id
      };
    default:
      return state;
  }
}
