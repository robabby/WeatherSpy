import {
  GET_CURRENT_WEATHER
} from '../actions/types';

const INITIAL_STATE = {
  iconClassName: 'wi wi-owm-day-800',
  coord: {},
  main: {},
  weather: {},
  temps: {
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
      console.log("GET_CURRENT_WEATHER | action.payload", action.payload);
      let { data, temps } = action.payload

      return {
        coord: data.coord,
        main: data.main,
        weather: data.weather[0],
        temps,
        humidity: data.main.humidity,
        wind: data.wind,
        iconClassName: 'wi wi-owm-' + data.weather[0].id
      }
    default:
      return state;
  }
}
