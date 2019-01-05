import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Form, FormGroup, Input, Label, Button} from "reactstrap";

export default class Comment extends Component {

  render() {
    const {commentId, userId, name, body} = this.props;
    return (
      <li className="card mb-3">
        <Link to={`/comments/${commentId}`}>
          <div className="card-header">
            <h5 className="card-title">
              Comment #{commentId} by user #{userId}: {name}
            </h5>
          </div>
        </Link>
        <div className="card-body" id={commentId}>
          <p className="card-text">
            {body}
          </p>
          <Form>
            <FormGroup>
              <Label for={`text${commentId}`}>Edit text</Label>
              <Input className="mb-2" type="textarea" name="text" id={`text${commentId}`} />
              <Button className="com_edit" data-id={commentId}>Edit comment</Button>
            </FormGroup>
          </Form>
          <Button className="com_del" data-id={commentId}>Delete comment</Button>
        </div>
      </li>
    )
  }
}