import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getPosts, addPost } from 'actions/postsAction';
import $ from 'jquery';

import PostsList from 'components/PostsList';
import PostForm from "components/PostForm";

class HomePageContainer extends Component {

  componentDidMount() {
    const { getPosts, addPost } = this.props;

    getPosts();

    $('#postAdd').on('click', (e) => {
      e.preventDefault();

      const $author = $('#postAuthor');
      const author = $author.val();
      const $email = $('#postEmail');
      const email = $email.val();
      const $title = $('#postTitle');
      const title = $title.val();
      const $text = $('#postText');
      const text = $text.val();
      const dataForm = {
        author: author,
        email: email,
        title: title,
        text: text,
      };

      if (author && email && title && text) {
        addPost(dataForm);

        $author.val('');
        $email.val('');
        $title.val('');
        $text.val('');
      }
    })
  }

  render() {
    const { posts, loadingPosts } = this.props;

    return (
      <Fragment>
        <PostForm/>
        <PostsList posts={posts} />
        { loadingPosts ? 'loading posts' : '' }
      </Fragment>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    ...props,
    posts: state.posts.posts,
    loadingPosts: state.posts.loadingPosts,
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    getPosts: () => dispatch(getPosts()),
    addPost: (dataForm) => dispatch(addPost(dataForm)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);