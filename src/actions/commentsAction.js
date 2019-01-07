import { createAction } from 'redux-actions';

export const getCommentsStarted = createAction('[GET_COMMENTS] Getting started');
export const getCommentsCompleted = createAction('[GET_COMMENTS] Getting completed');
export const getCommentsFailed = createAction('[GET_COMMENTS] Getting failed');
export const deleteCommentSuccess = createAction('[DELETE_COMMENT] Deleting successfully');
export const deleteCommentFailed = createAction('[DELETE_COMMENT] Deleting failed');
export const addCommentSuccess = createAction('[ADD_COMMENT] Adding successfully');
export const addCommentFailed = createAction('[ADD_COMMENT] Adding failed');
export const editCommentSuccess = createAction('[EDIT_COMMENT] Editing successfully');
export const editCommentFailed = createAction('[EDIT_COMMENT] Editing failed');

export const getComments = (postId) => (dispatch, getState) => {
  const state = getState();
  dispatch(getCommentsStarted());
  fetch(`http://localhost:3000/api/comments/${postId}`)
    .then((response) => response.json())
    .then((comments) => {
      dispatch(getCommentsCompleted(comments));
    })
    .catch(() => {
      dispatch(getCommentsFailed('error'))
    })
};

export const deleteComment = (_id) => (dispatch) => {
  return fetch(`http://localhost:3000/api/comments/delete/${_id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((idComment) => {
      dispatch(deleteCommentSuccess(idComment));
    })
    .catch(() => {
      dispatch(deleteCommentFailed('error'));
    });
};

export const addComment = (dataForm) => (dispatch) => {
  return fetch(`http://localhost:3000/api/comments/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dataForm)
  })
    .then((response) =>  response.json())
    .then((data) => {
      dispatch(addCommentSuccess(data));
    })
    .catch(() => {
      dispatch(addCommentFailed('error'));
    });
};

export const editComment = (dataForm) => (dispatch) => {
  return fetch(`http://localhost:3000/api/comments/update/${dataForm.commentId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dataForm)
  })
    .then((response) =>  response.json())
    .then((data) => {
      dispatch(editCommentSuccess(data));
    })
    .catch(() => {
      dispatch(editCommentFailed('error'));
    });
};




