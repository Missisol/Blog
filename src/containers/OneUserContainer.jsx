import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getUser } from 'actions/usersAction';
import { getPosts } from 'actions/postsAction';

import OneUser from 'components/OneUser';
import PostsList from 'components/PostsList';

class OneUserContainer extends Component {

  componentDidMount() {
    const { getUser, getPosts, match } = this.props;
    const id = match.params._id;

    // получение пользователя
    getUser(id);
    // получение комментариев к посту
    getPosts(id);
  }

  render() {
    const {user, loadingUsers, posts, loadingPosts } = this.props;

    return (
      <Fragment>
        <OneUser user={user} />
        { loadingUsers ? 'loading user' : '' }
        <PostsList posts={posts} />
        { loadingPosts ? 'loading posts' : '' }
      </Fragment>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    ...props,
    user: state.users.users,
    loadingUsers: state.users.loadingUsers,
    posts: state.posts.posts,
    loadingPosts: state.posts.loadingPosts,
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    getUser: (id) => dispatch(getUser(id)),
    getPosts: (userId) => dispatch(getPosts(userId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OneUserContainer);