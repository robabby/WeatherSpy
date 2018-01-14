import {
  CHANGE_TEMP_UNIT
} from './types';

export const changeTempUnit = (unit) => {
  return {
    payload: unit,
    type: CHANGE_TEMP_UNIT
  };
}
