import {
  CHANGE_TEMP_UNIT
} from './types';

export const changeTempUnit = (prevUnit, newUnit) => {
  let newState = {
    prevUnit,
    newUnit
  }
  return {
    payload: newState,
    type: CHANGE_TEMP_UNIT
  };
}
