import { createAction } from 'redux-actions';

export const getOnePostStarted = createAction('[GET_ONE_POST] Getting started');
export const getOnePostCompleted = createAction('[GET_ONE_POST] Getting completed');
export const getOnePostFailed = createAction('[GET_ONE_POST] Getting failed');

export const getPost = (id) => (dispatch) => {
  dispatch(getOnePostStarted());
  fetch(`http://localhost:3000/api/posts/${id}`)
    .then((response) => response.json())
    .then((post) => {
      dispatch(getOnePostCompleted(post));
    })
    .catch(() => {
      dispatch(getOnePostFailed('error'))
    })
};



