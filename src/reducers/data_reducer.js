import merge from 'lodash/merge';
import {
  RECEIVE_DATA
} from '../actions/data_actions';

const defaultState = {};

const DataReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_DATA:
      newState = merge({}, state, action.data)
      return newState;
    default:
      return state;
  }
}

export default DataReducer;
