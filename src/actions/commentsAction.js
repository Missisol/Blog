import {DELETE_COMMENT, GET_COMMENTS, ADD_COMMENTS, EDIT_COMMENTS} from '../constants/commentsConstants';
import axios from 'axios';

import { createAction } from 'redux-actions';

export const getCommentsStarted = createAction('[GET_COMMENTS] Getting started');
export const getCommentsCompleted = createAction('[GET_COMMENTS] Getting completed');
export const getCommentsFailed = createAction('[GET_COMMENTS] Getting failed');
export const deleteCommentSuccess = createAction('[DELETE_COMMENT] Deleting successfully');
export const addCommentSuccess = createAction('[ADD_COMMENT] Adding successfully');

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

export const addComment = (name, commentId, userId, body) => (dispatch) => {
  return fetch(`http://localhost:3000/api/comments/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: name,
      commentId: commentId,
      userId: userId,
      body: body
    })
  })
    .then((response) =>  response.json())
    .then((data) => {
      dispatch(addCommentSuccess(data));
    })
    .catch(() => {
      console.log('err');
    });
};


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



