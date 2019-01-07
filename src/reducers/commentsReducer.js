import {handleActions} from 'redux-actions';
import {
  getCommentsStarted, getCommentsCompleted, getCommentsFailed,
  deleteCommentSuccess, deleteCommentFailed, addCommentSuccess,
  addCommentFailed, editCommentSuccess, editCommentFailed
} from 'actions/commentsAction';

const initialState = {
  comments: [],
  loadingComments: false,
};

export default handleActions({
  [getCommentsStarted]: (state) => {
    return {
      ...state,
      loadingComments: true,
    }
  },
  [getCommentsCompleted]: (state, action) => {
    return {
      ...state,
      comments: action.payload,
      loadingComments: false,
    }
  },
  [getCommentsFailed]: (state) => {
    return {
      ...state,
      loadingComments: false,
    }
  },
  [deleteCommentSuccess]: (state, action) => {
    let index = null;
    state.comments.forEach((value, i) => {
      if (value._id === action.payload._id) {
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
      loadingComments: false,
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
      loadingComments: false,
    }
  },
  [editCommentSuccess]: (state, action) => {
    let index = null;
    state.comments.forEach((value, i) => {
      if (value._id === action.payload._id) {
        index = i;
      }
    });

    if (index !== null) {
      state.comments[index].text = action.payload.text;
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
      loadingComments: false,
    }
  },
}, initialState);