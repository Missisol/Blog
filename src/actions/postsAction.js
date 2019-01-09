import {createAction} from 'redux-actions';

export const getPostsStarted = createAction('[GET_POSTS] Getting started');
export const getPostsCompleted = createAction('[GET_POSTS] Getting completed');
export const getPostsFailed = createAction('[GET_POSTS] Getting failed');
export const addPostSuccess = createAction('[ADD_POST] Adding successfully');
export const addPostFailed = createAction('[ADD_POST] Adding failed');

export const getPosts = (userId) => (dispatch) => {
  if (!userId) {
    dispatch(getPostsStarted());
    fetch(`http://localhost:3000/api/posts`)
      .then((response) => response.json())
      .then((posts) => {
        dispatch(getPostsCompleted(posts));
      })
      .catch(() => {
        dispatch(getPostsFailed('error'))
      })
  } else {
    dispatch(getPostsStarted());
    fetch(`http://localhost:3000/api/posts/${userId}`)
      .then((response) => response.json())
      .then((posts) => {
        dispatch(getPostsCompleted(posts));
      })
      .catch(() => {
        dispatch(getPostsFailed('error'))
      })
  }
};

export const addPost = (dataForm) => (dispatch) => {
  return fetch(`http://localhost:3000/api/posts/add`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(dataForm)
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch(addPostSuccess(data));
    })
    .catch(() => {
      dispatch(addPostFailed('error'));
    });
};





