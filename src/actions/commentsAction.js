import {DELETE_COMMENT, GET_COMMENTS, ADD_COMMENTS, EDIT_COMMENTS} from '../constants/commentsConstants';
import axios from 'axios';

import { createAction } from 'redux-actions';

export const getCommentsStarted = createAction('[GET_COMMENTS] Getting started');
export const getCommentsCompleted = createAction('[GET_COMMENTS] Getting completed');
export const getCommentsFailed = createAction('[GET_COMMENTS] Getting failed');
export const deleteCommentSuccess = createAction('[DELETE_COMMENT] Deleting successfully');

export const getComments = () => (dispatch, getState) => {
  const state = getState();
  dispatch(getCommentsStarted());
  fetch('http://localhost:3000/api/comments')
    .then((response) => response.json())
    .then((comments) => {
      dispatch(getCommentsCompleted(comments));
    })
    .catch(() => {
      dispatch(getCommentsFailed('err'))
    })
};

export const deleteComment = (commentId) => (dispatch) => {
  return fetch(`http://localhost:3000/api/comments/delete/${commentId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((idComment) => {
      dispatch(deleteCommentSuccess(idComment));
    })
    .catch(() => {
      console.log('err');
    });
};


// export function getComments() {
//   return {
//     type: GET_COMMENTS,
//     payload: axios.get('http://localhost:3000/api/comments')
//   }
// }
//
// export function deleteComment(commentId) {
//   return {
//     type: DELETE_COMMENT,
//     payload: axios.delete(`http://localhost:3000/api/comments/delete/${commentId}`)
//   }
// }
//
// export function addComment(name, commentId, userId, body) {
//   return {
//     type: ADD_COMMENTS,
//     payload: axios.post(`http://localhost:3000/api/comments`,
//       {
//         name: name,
//         commentId: commentId,
//         userId: userId,
//         body: body
//       })
//   }
// }
//
// export function editComment(commentId, text) {
//   return {
//     type: EDIT_COMMENTS,
//     payload: axios.patch(`http://localhost:3000/api/comments/update/${commentId}`,
//       {
//         commentId: commentId,
//         text: text
//       })
//   }
// }



