import './TopPosts.css';

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Card, CardBody, CardHeader, CardTitle, CardLink} from 'reactstrap';

export default class TopPosts extends Component {

  render() {
    const {posts} = this.props;

    return (
      <div>
        <Card>
          <CardHeader>
            <CardTitle className="title">Latest posts</CardTitle>
          </CardHeader>
          <CardBody className="topPostsLinkWrap">
            {posts.map((post =>
              <li key={post._id} id={post._id} className="list-group-item topPostsLink">
                {post.author}: {post.title}
              </li>))}
          </CardBody>
        </Card>
      </div>
    )
  }
}

