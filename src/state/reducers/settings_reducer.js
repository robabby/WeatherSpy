import {
  CHANGE_TEMP_UNIT
} from '../actions/types';

const INITIAL_STATE = {
  unit: 'imperial',
  previous: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_TEMP_UNIT:
      return {
        unit: action.payload.newUnit,
        previous: action.payload.prevUnit
      };
    default:
      return state;
  }
}
