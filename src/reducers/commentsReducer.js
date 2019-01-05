// import * as CommentsConstants from '../constants/commentsConstants';
//
// export function commentsReducer(state = { comments: [], loading: false}, action) {
//   switch (action.type) {
//
//     case CommentsConstants.GET_COMMENTS_PENDING: {
//       state = {...state, loading: true};
//       break;
//     }
//     case CommentsConstants.GET_COMMENTS_FULFILLED: {
//       state = {...state, loading: false, comments: action.payload.data};
//       break;
//     }
//     case CommentsConstants.GET_COMMENTS_REJECTED: {
//       state = {...state, loading: false, error_message: action.payload.message};
//       break;
//     }
//     case CommentsConstants.DELETE_COMMENT_FULFILLED: {
//       let index = null;
//             state.comments.forEach((value, i) => {
//               if (parseInt(value.commentId) === parseInt(action.payload.data.commentId)) {
//                 index = i;
//               }
//             });
//
//       if (index !== null) {
//         state.comments.splice(index, 1);
//       }
//       state = {
//         ...state,
//         comments: [...state.comments]
//       };
//       break;
//     }
//     case CommentsConstants.ADD_COMMENTS_FULFILLED: {
//       state.comments.push(action.payload.data);
//       state = {
//         ...state,
//         comments: [...state.comments]
//       };
//       break;
//     }
//     case CommentsConstants.EDIT_COMMENTS_FULFILLED: {
//       let index = null;
//       state.comments.forEach((value, i) => {
//         if (parseInt(value.commentId) === parseInt(action.payload.data.commentId)) {
//           index = i;
//         }
//       });
//       if (index !== null) {
//         state.comments[index].body = action.payload.data.text;
//         console.log(action.payload.data.text);
//         state = {
//           ...state,
//           comments: [...state.comments]
//         }
//       }
//       break;
//     }
//   }
//   return state;
// }

import {handleActions} from 'redux-actions';
import {
  getCommentsStarted, getCommentsCompleted, getCommentsFailed,
  deleteCommentSuccess, addCommentSuccess
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
  [addCommentSuccess]: (state, action) => {
    state.comments.push(action.payload);
    return {
      ...state,
      comments: [...state.comments]
    };
  }
}, initialState);