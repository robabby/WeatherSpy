import {
  TOGGLE_SIDE_DRAWER
} from '../actions/types';

const INITIAL_STATE = {
  isOpen: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_DRAWER:
      return { isOpen: !action.payload };
    default:
      return state;
  }
}
