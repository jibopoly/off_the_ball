import { INCREASE_SUCCESSFULL_PASS_COUNT, INCREASE_FAILED_PASS_COUNT } from '../constants/actionTypes/CurrentSessionActionTypes';

const INITIAL_STATE = {
  date: '29/10/89',
  playerName: 'player 1',
  passesCompleted: 2,
  passesFailed: 1,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREASE_SUCCESSFULL_PASS_COUNT:
      return {
        ...state,
        passesCompleted: state.passesCompleted + 1,
      };
    case INCREASE_FAILED_PASS_COUNT:
      return {
        ...state,
        passesFailed: state.passesFailed + 1,
      };
    default:
      return state;
  }
};
