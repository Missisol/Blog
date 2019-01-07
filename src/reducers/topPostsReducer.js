import {handleActions} from 'redux-actions';
import { getTopPostsStarted, getTopPostsCompleted, getTopPostsFailed } from 'actions/topPostsAction';

const initialState = {
  topPosts: [],
  loadingTopPosts: false,
};

export default handleActions({
  [getTopPostsStarted]: (state) => {
    return {
      ...state,
      loadingTopPosts: true,
    }
  },
  [getTopPostsCompleted]: (state, action) => {
    return {
      ...state,
      topPosts: state.topPosts.concat(action.payload),
      loadingTopPosts: false,
    }
  },
  [getTopPostsFailed]: (state) => {
    return {
      ...state,
      loadingTopPosts: false,
    }
  },
}, initialState);