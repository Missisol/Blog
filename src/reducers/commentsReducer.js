import {handleActions} from 'redux-actions';
import {
  getCommentsStarted, getCommentsCompleted, getCommentsFailed,
  deleteCommentSuccess, deleteCommentFailed, addCommentSuccess,
  addCommentFailed, editCommentSuccess, editCommentFailed
} from 'actions/commentsAction';

const initialState = {
  comments: [],
  loading: false,
};

export default handleActions({
  [getCommentsStarted]: (state) => {
    return {
      ...state,
      loading: true,
    }
  },
  [getCommentsCompleted]: (state, action) => {
    return {
      ...state,
      loading: false,
      comments: action.payload
    }
  },
  [getCommentsFailed]: (state) => {
    return {
      ...state,
      loading: false,
    }
  },
  [deleteCommentSuccess]: (state, action) => {
    let index = null;
    state.comments.forEach((value, i) => {
      if (parseInt(value.commentId) === parseInt(action.payload.commentId)) {
        index = i;
      }
    });

    if (index !== null) {
      state.comments.splice(index, 1);
    }
    return {
      ...state,
      comments: [...state.comments]
    };
  },
  [deleteCommentFailed]: (state) => {
    return {
      ...state,
      loading: false,
    }
  },
  [addCommentSuccess]: (state, action) => {
    state.comments.push(action.payload);
    return {
      ...state,
      comments: [...state.comments]
    };
  },
  [addCommentFailed]: (state) => {
    return {
      ...state,
      loading: false,
    }
  },
  [editCommentSuccess]: (state, action) => {
    let index = null;
    state.comments.forEach((value, i) => {
      if (parseInt(value.commentId) === parseInt(action.payload.commentId)) {
        index = i;
      }
    });

    if (index !== null) {
      state.comments[index].body = action.payload.text;
      console.log(action.payload.text);
      return {
        ...state,
        comments: [...state.comments]
      }
    }
  },
  [editCommentFailed]: (state) => {
    return {
      ...state,
      loading: false,
    }
  },
}, initialState);