import './CommentForm.css';

import React, { Component, Fragment } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

export default class CommentForm extends Component {

  render() {
    return (
      <Fragment>
        <h5>Добавить комментарий</h5>
        <Form className="commentForm">
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" placeholder="name" />
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="commentId">commentId</Label>
                <Input type="text" name="commentId" id="commentId" placeholder="commentId" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="userId">userId</Label>
                <Input type="text" name="userId" id="userId" placeholder="userId" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="body">Text</Label>
            <Input type="textarea" name="body" id="body" />
          </FormGroup>
          <Button id="com_add">Submit</Button>
        </Form>
      </Fragment>

    )
  }
}