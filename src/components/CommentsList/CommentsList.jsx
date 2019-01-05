import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Comment from 'components/Comment';

import PropTypes from 'prop-types';

export default class CommentsList extends Component {

  // Компонент комментариев
  render() {
    const { comments } = this.props;

    return (
      <Fragment>
        <h4>Комментарии</h4>
        <ul className="commentsList">
          {comments.map((comment, idx) => {
            return <Comment key={idx} {...comment} />
          })
          }
        </ul>
      </Fragment>
    )
  }
}