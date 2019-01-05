import React, {Component, Fragment} from 'react';
import {getComments, deleteComment, addComment, editComment, deleteOneComment} from 'actions/commentsAction'
import {connect} from 'react-redux';
import $ from 'jquery';

import CommentsList from 'components/CommentsList';
import CommentForm from 'components/CommentForm';

class CommentsContainer extends Component {

  componentDidMount() {
  const { getComments, deleteComment, addComment} = this.props;

    // получение
    getComments();

    // удаление
    $('.commentsList').on('click', '.com_del', (event) => {
      event.preventDefault();

      const idComment = $(event.target).data('id');
      deleteComment(idComment);
    });

    // добавление
    $('#com_add').on('click', (event) => {
      event.preventDefault();

      const $name = $('#name');
      const name = $('#name').val();
      const $commentId = $('#commentId');
      const commentId = $('#commentId').val();
      const $userId = $('#userId');
      const userId = $('#userId').val();
      const $body = $('#body');
      const body = $('#body').val();

      if (name && commentId && userId && body) {
        addComment(name, commentId, userId, body);

        $name.val('');
        $commentId.val('');
        $userId.val('');
        $body.val('');
      }
    });

    // редактирование
    $('.commentsList').on('click', '.com_edit', (event) => {
      event.preventDefault();

      const commentId = $(event.target).data('id');
      const $text = $('#text' + commentId);
      const text = $text.val();

      if (commentId && text) {
        this.props.dispatch(editComment(commentId, text));
        $text.val('');
      }
    })
  }

  render() {
    const { comments, loading } = this.props;

    return (
      <Fragment>
        <CommentForm/>
        <CommentsList comments={comments}/>
        { loading ? 'load' : ''}
      </Fragment>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    ...props,
    comments: state.comments.comments,
    loading: state.comments.loading,
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    getComments: () => dispatch(getComments()),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    addComment: (name, commentId, userId, body) => dispatch(addComment(name, commentId, userId, body)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);