import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getPost } from 'actions/onePostAction';
import { getComments, addComment, deleteComment, editComment } from 'actions/commentsAction';

import OnePost from 'components/OnePost';
import CommentForm from 'components/CommentForm';
import CommentsList from 'components/CommentsList';
import $ from 'jquery';

class OnePostContainer extends Component {

  componentDidMount() {
    const { getPost, getComments, deleteComment, addComment, editComment, match } = this.props;
    const id = match.params._id;
    console.log(match.params._id);

    // получение поста
    getPost(id);
    // получение комментариев к посту
    getComments(id);

    // удаление
    $('.commentsList').on('click', '.commentDelete', (event) => {
      event.preventDefault();

      const commentId = $(event.target).data('id');
      deleteComment(commentId);
    });

    // добавление
    $('#commentAdd').on('click', (event) => {
      event.preventDefault();

      const $author = $('#commentAuthor');
      const author = $author.val();
      const $email = $('#commentEmail');
      const email = $email.val();
      const $title = $('#commentTitle');
      const title = $title.val();
      const $text = $('#commentText');
      const text = $text.val();
      const postId = $(event.target).data('postid');
      const dataForm = {
        author: author,
        email: email,
        title: title,
        text: text,
        postId: postId
      };

      if (author && email && title && text) {
        addComment(dataForm);

        $author.val('');
        $email.val('');
        $title.val('');
        $text.val('');
      }
    });

    // редактирование
    $('.commentsList').on('click', '.commentEdit', (event) => {
      event.preventDefault();

      const id = $(event.target).data('id');
      const $text = $('#text' + id);
      const text = $text.val();

      const data = {
        _id: id,
        text: text
      };

      if (id && text) {
        editComment(data);
        $text.val('');
      }
    })
  }

  render() {
    const {post, loadingPost, comments, loadingComments, match} = this.props;
    // console.log(match.params._id);

    return (
      <Fragment>
        <OnePost post={post} />
        { loadingPost ? 'loading post' : '' }
        <CommentsList comments={comments} />
        { loadingComments ? 'loading comments' : '' }
        <CommentForm postId={match.params._id} />
      </Fragment>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    ...props,
    post: state.post.post,
    loadingPost: state.post.loadingPost,
    comments: state.comments.comments,
    loadingComments: state.comments.loadingComments,
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    getPost: (id) => dispatch(getPost(id)),
    getComments: (postId) => dispatch(getComments(postId)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    addComment: (data) => dispatch(addComment(data)),
    editComment: (data) => dispatch(editComment(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OnePostContainer);