import {createAction} from 'redux-actions';

export const getUsersStarted = createAction('[GET_USERS] Getting started');
export const getUsersCompleted = createAction('[GET_USERS] Getting completed');
export const getUsersFailed = createAction('[GET_USERS] Getting failed');

export const getUsers = () => (dispatch) => {
  dispatch(getUsersStarted());
  fetch(`http://localhost:3000/api/users`)
    .then((response) => response.json())
    .then((users) => {
      dispatch(getUsersCompleted(users));
    })
    .catch(() => {
      dispatch(getUsersFailed('error'))
    })
};





