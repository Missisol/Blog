import './CommentsList.css';

import React, {Component, Fragment} from 'react';
import { Row } from 'reactstrap';
import Comment from 'components/Comment';

import PropTypes from 'prop-types';

export default class CommentsList extends Component {

  // Компонент комментариев
  render() {
    const { comments, postId } = this.props;

    return (
      <Fragment>
        <h4 className="title mt-4">Comments</h4>
        <Row className="commentsList">
          {comments.length ===0 ? 'No comments yet' : comments.map((comment, idx) => {
            return <Comment key={idx} {...comment} postId={postId} />
          })
          }
        </Row>
      </Fragment>
    )
  }
}