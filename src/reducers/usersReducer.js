import {handleActions} from 'redux-actions';
import {
  getUsersStarted, getUsersCompleted, getUsersFailed,
  getOneUserStarted, getOneUserCompleted, getOneUserFailed,
} from 'actions/usersAction';

const initialState = {
  users: [],
  loadingUsers: false,
};

export default handleActions({
  [getUsersStarted]: (state) => {
    return {
      ...state,
      loadingUsers: true,
    }
  },
  [getUsersCompleted]: (state, action) => {
    return {
      ...state,
      users: action.payload,
      loadingUsers: false,
    }
  },
  [getUsersFailed]: (state) => {
    return {
      ...state,
      loadingUsers: false,
    }
  },
  [getOneUserStarted]: (state) => {
    return {
      ...state,
      loadingUsers: true,
    }
  },
  [getOneUserCompleted]: (state, action) => {
    return {
      ...state,
      users: [action.payload],
      loadingUsers: false,
    }
  },
  [getOneUserFailed]: (state) => {
    return {
      ...state,
      loadingUsers: false,
    }
  },
}, initialState);