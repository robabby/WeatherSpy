import {
  CREATE_NEW_TRIGGER,
  GET_TRIGGERS,
  DELETE_TRIGGER
} from '../actions/types';

const INITIAL_STATE = {
  haveTriggers: false,
  triggers: [],
  newTrigger: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_NEW_TRIGGER:
      console.log("CREATE_NEW_TRIGGER | action.payload ", action.payload);
      return {
        haveTriggers: action.payload.length > 0,
        newTrigger: action.payload
      }
    case GET_TRIGGERS:
      console.log("GET_TRIGGERS | action.payload ", action.payload);
      return {
        haveTriggers: action.payload.data.length > 0,
        triggers: action.payload.data
      }
    case DELETE_TRIGGER:
      console.log("DELETE_TRIGGER | action.payload ", action.payload);
      return {}
    default:
      return state;
  }
}
