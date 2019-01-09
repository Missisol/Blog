import {handleActions} from 'redux-actions';
import { getOnePostStarted, getOnePostCompleted, getOnePostFailed } from 'actions/onePostAction';

const initialState = {
  post: [],
  loadingPost: false,
};

export default handleActions({
    [getOnePostStarted]: (state) => {
    return {
      ...state,
      loadingPost: true,
    }
  },
  [getOnePostCompleted]: (state, action) => {
    return {
      ...state,
      post: action.payload,
      loadingPost: false,
    }
  },
  [getOnePostFailed]: (state) => {
    return {
      ...state,
      loadingPost: false,
    }
  },
}, initialState);