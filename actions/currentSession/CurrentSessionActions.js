import { INCREASE_SUCCESSFULL_PASS_COUNT, INCREASE_FAILED_PASS_COUNT } from '../../constants/actionTypes/CurrentSessionActionTypes';

export const increaseSuccessFullPassCount = () => (
  {
    type: INCREASE_SUCCESSFULL_PASS_COUNT,
  }
);

export const increaseFailedPassCount = () => (
  {
    type: INCREASE_FAILED_PASS_COUNT,
  }
);
