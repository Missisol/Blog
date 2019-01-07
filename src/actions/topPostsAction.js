import { createAction } from 'redux-actions';

export const getTopPostsStarted = createAction('[GET_TOP_POSTS] Getting started');
export const getTopPostsCompleted = createAction('[GET_TOP_POSTS] Getting completed');
export const getTopPostsFailed = createAction('[GET_TOP_POSTS] Getting failed');

export const getTopPosts = () => (dispatch) => {
  dispatch(getTopPostsStarted());
  fetch('http://localhost:3000/api/posts/top')
    .then((response) => response.json())
    .then((topPosts) => {
      dispatch(getTopPostsCompleted(topPosts));
    })
    .catch(() => {
      dispatch(getTopPostsFailed('error'))
    })
};

