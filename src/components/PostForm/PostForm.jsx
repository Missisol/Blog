import React, { Component, Fragment } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

export default class PostForm extends Component {

  render() {
    return (
      <Fragment>
        <h5 >Add new post</h5>
        <Form className="postForm">
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Input type="text" name="postAuthor" id="postAuthor" placeholder="Author" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input type="text" name="postEmail" id="postEmail" placeholder="Email" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Input type="text" name="postTitle" id="postTitle" placeholder="Post title" />
          </FormGroup>
          <FormGroup>
            <Input type="textarea" name="text" id="postText" placeholder="Post text" />
          </FormGroup>
          <Button id="postAdd">Submit</Button>
        </Form>
      </Fragment>

    )
  }
}