import {
  TOGGLE_SIDE_DRAWER
} from './types';

export const toggleSideDrawer = (state) => {
  return {
    payload: state,
    type: TOGGLE_SIDE_DRAWER
  };
}
