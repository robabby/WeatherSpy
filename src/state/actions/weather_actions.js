import axios from 'axios'
import api from '../../utils/api'

import {
  GET_CURRENT_WEATHER
} from './types';

export const getCurrentWeather = (unit) => async (dispatch) => {
  let tempUnit = unit === 'both' ? 'celsius' : 'imperial'
  let { data } = await axios.get(api.getWeatherUrl(unit))
  dispatch({ type: GET_CURRENT_WEATHER, payload: { data, unit } })
}
