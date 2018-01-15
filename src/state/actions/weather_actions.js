import axios from 'axios'
import api from '../../utils/api'

import {
  GET_CURRENT_WEATHER,
  GET_BOTH_TEMPERATURES
} from './types';

export const getCurrentWeather = (unit) => async (dispatch) => {
  let temps = await getTemps()
  let { data } = await axios.get(api.getWeatherUrl(unit))
  dispatch({ type: GET_CURRENT_WEATHER, payload: { data, temps } })
}

const getTemps = async () => {
  let metricRes = await axios.get(api.getWeatherUrl('metric'))
  let imperialRes = await axios.get(api.getWeatherUrl('imperial'))
  let imperial = imperialRes.data.main
  let metric = metricRes.data.main
  console.log("getTemps | imperialRes, metricRes", imperialRes, metricRes);
  return { imperial, metric }
}
