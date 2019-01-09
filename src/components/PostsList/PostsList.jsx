import './PostsList.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import Post from 'components/Post';


export default class PostsList extends Component {

  render() {
    const {posts} = this.props;

    return (
      <div className="postsList">
        <h4 className="title">Posts</h4>
        <Row>
          {posts.map((post, idx) => <Post key={idx} {...post} />)}
        </Row>
      </div>
    )
  }
}