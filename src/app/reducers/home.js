import { handleActions } from 'redux-actions';
import * as types from 'constants/action-types';

const initialState = {
  library: {},
};

const handler = {};

handler[types.RECEIVE_BOX_LIBRARY] = (state, action) => {
  const { library } = action;
  return {
    ...state,
    library,
  };
};

export default handleActions(handler, initialState);
