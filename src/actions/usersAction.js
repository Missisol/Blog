import {createAction} from 'redux-actions';

export const getUsersStarted = createAction('[GET_USERS] Getting started');
export const getUsersCompleted = createAction('[GET_USERS] Getting completed');
export const getUsersFailed = createAction('[GET_USERS] Getting failed');
export const getOneUserStarted = createAction('[GET_ONE_USER] Getting started');
export const getOneUserCompleted = createAction('[GET_ONE_USER] Getting completed');
export const getOneUserFailed = createAction('[GET_ONE_USER] Getting failed');

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

export const getUser = (id) => (dispatch) => {
  dispatch(getOneUserStarted());
  fetch(`http://localhost:3000/api/users/${id}`)
    .then((response) => response.json())
    .then((user) => {
      dispatch(getOneUserCompleted(user));
    })
    .catch(() => {
      dispatch(getOneUserFailed('error'))
    })
};





