import {handleActions} from 'redux-actions';
import {
  getPostsStarted, getPostsCompleted, getPostsFailed,
  addPostSuccess, addPostFailed
} from 'actions/postsAction';

const initialState = {
  posts: [],
  loadingPosts: false,
};

export default handleActions({
  [getPostsStarted]: (state) => {
    return {
      ...state,
      loadingPosts: true,
    }
  },
  [getPostsCompleted]: (state, action) => {
    return {
      ...state,
      posts: action.payload,
      loadingPosts: false,
    }
  },
  [getPostsFailed]: (state) => {
    return {
      ...state,
      loadingPosts: false,
    }
  },
  [addPostSuccess]: (state, action) => {
    return {
      ...state,
      posts: state.posts.concat([action.payload])
    };
  },
  [addPostFailed]: (state) => {
    return {
      ...state,
      loadingPosts: false,
    }
  },
}, initialState);