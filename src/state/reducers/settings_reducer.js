import {
  CHANGE_TEMP_UNIT
} from '../actions/types';

const INITIAL_STATE = {
  unit: 'imperial'
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_TEMP_UNIT:
      return { unit: action.payload };
    default:
      return state;
  }
}
