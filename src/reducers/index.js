import { combineReducers } from 'redux';
import commentsReducer from './commentsReducer';
import postsReducer from './postsReducer';
import onePostReducer from './onePostReducer';
import topPostsReducer from './topPostsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  comments: commentsReducer,
  posts: postsReducer,
  post: onePostReducer,
  topPosts: topPostsReducer,
  users: usersReducer,
})