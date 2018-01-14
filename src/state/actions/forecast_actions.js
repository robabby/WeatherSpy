import axios from 'axios'
import api from '../../utils/api'

import {
  GET_FORECAST
} from './types';

export const getForecast = (unit) => async (dispatch) => {
  let tempUnit = unit === 'both' ? 'celsius' : 'imperial'
  let { data } = await axios.get(api.getForecastUrl(unit))
  dispatch({ type: GET_FORECAST, payload: { data, unit } })
}
