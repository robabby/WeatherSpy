import axios from 'axios'
import api from '../../utils/api'
import helpers from '../../utils/helpers'

import {
  CREATE_NEW_TRIGGER,
  GET_TRIGGERS,
  DELETE_TRIGGER
} from './types';

let newTrigger = {
   "time_period":{
      "start":{
         "expression":"after",
         "amount":132000000
      },
      "end":{
         "expression":"after",
         "amount":432000000
      }
   },
   "conditions":[
      {
         "name":"temp",
         "expression":"$gt",
         "amount":299
      }
   ],
   "area":[
      {
         "type":"Point",
         "coordinates":[53, 37]
      }
   ]
}

export const createNewTrigger = (trigger) => async (dispatch) => {
  console.log("createNewTrigger | trigger ", trigger);
  console.log("createNewTrigger | newTrigger ", newTrigger);

  let { temp, unit, coords } = trigger
  let kelvin = helpers.convertToKelvin(temp, unit)
  let lat = helpers.cleanDecimals(coords.lat)
  let lon = helpers.cleanDecimals(coords.lon)

  newTrigger["conditions"][0]["amount"] = parseInt(kelvin)
  newTrigger["area"][0]["coordinates"][0] = parseInt(lat)
  newTrigger["area"][0]["coordinates"][1] = parseInt(lon)

  console.log("createNewTrigger | newTrigger ", newTrigger);

  let { data } = await axios.post(api.getNewTriggerUrl(), newTrigger)
  dispatch({ type: CREATE_NEW_TRIGGER, payload: data })
}

export const getTriggers = () => async (dispatch) => {
  let res = await axios.get(api.getTriggersUrl())
  dispatch({ type: GET_TRIGGERS, payload: res })
}

export const deleteTrigger = (id) => async (dispatch) => {
  let res = await axios.delete(api.getTriggersUrl())
  dispatch({ type: DELETE_TRIGGER, payload: res })
}
