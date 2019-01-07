import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { getTopPosts } from "actions/topPostsAction";
import $ from 'jquery';

import TopPosts from 'components/TopPosts';
import PropTypes from 'prop-types';

// Контейнер с логикой рендеринга блока с последними постами
class TopPostsContainer extends Component {

  componentDidMount() {
    const { getTopPosts } = this.props;

    getTopPosts();

    $('.topPostsLinkWrap').on('click', (e) => {
      e.preventDefault();

      const id = $(e.target).attr('id');
      document.location = `/post/${id}`;
    })
  }

  render() {
    const { topPosts, loadingTopPosts  } = this.props;

    return (
      <Fragment>
        <TopPosts posts={topPosts} />
        { loadingTopPosts ? 'loading' : '' }
      </Fragment>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    ...props,
    topPosts: state.topPosts.topPosts,
    loadingTopPosts: state.topPosts.loadingTopPosts,
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    getTopPosts: () => dispatch(getTopPosts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopPostsContainer);
