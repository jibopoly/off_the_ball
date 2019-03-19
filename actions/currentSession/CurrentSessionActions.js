import { INCREASE_PASS_COUNT, DECREASE_PASS_COUNT } from '../../constants/actionTypes/CurrentSessionActionTypes';

export const increasePassCount = () => (
  {
    type: INCREASE_PASS_COUNT,
  }
);

export const decreasePassCount = () => (
  {
    type: DECREASE_PASS_COUNT,
  }
);
