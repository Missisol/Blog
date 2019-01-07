import React, { Component, Fragment } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

export default class CommentForm extends Component {

  render() {
    const { postId } = this.props;

    return (
      <Fragment>
        <h5 className="mt-5" >Add comment</h5>
        <Form className="commentForm">
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Input type="text" name="commentAuthor" id="commentAuthor" placeholder="Author" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input type="text" name="commentEmail" id="commentEmail" placeholder="Email" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Input type="text" name="commentTitle" id="commentTitle" placeholder="Comment title" />
          </FormGroup>
          <FormGroup>
            <Input type="textarea" name="text" id="commentText" placeholder="Comment text" />
          </FormGroup>
          <button className="btn btn-secondary" data-postid={postId} id="commentAdd" >Submit</button>
        </Form>
      </Fragment>

    )
  }
}