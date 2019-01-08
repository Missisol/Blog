import {handleActions} from 'redux-actions';
import { getUsersStarted, getUsersCompleted, getUsersFailed } from 'actions/usersAction';

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
}, initialState);