import axios from 'axios'
import api from '../../utils/api'

import {
  GET_AIR_QUALITY
} from './types';

export const getAirQuality = (coords) => async (dispatch) => {
  let { data } = await axios.get(api.getAirQualityUrl(coords))
  dispatch({ type: GET_AIR_QUALITY, payload: data })
}
