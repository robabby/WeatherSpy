import axios from 'axios'
import api from '../../utils/api'

import {
  GET_WEATHER_MAP
} from './types';

export const getWeatherMap = (coords) => async (dispatch) => {
  let { data } = await axios.get(api.getWeatherMap(coords))
  dispatch({ type: GET_WEATHER_MAP, payload: api.getWeatherMap(coords) })
}
