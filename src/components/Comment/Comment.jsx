import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {
  Form, FormGroup, Input, Button, Card,
  CardHeader, CardBody, CardTitle, CardText, Col
} from "reactstrap";

export default class Comment extends Component {

  render() {
    const {author, email, title, text, _id, postId} = this.props;

    return (
      <Fragment>
        <Col sm="12">
          <Card>
            <CardBody id={_id} data-postid={postId}>
              Comment by user #{author} ({email})
              <CardTitle>{title}</CardTitle>
              <CardText>{text}</CardText>
              <Form>
                <FormGroup>
                  <Input className="mb-2" type="textarea" name="text" id={`text${_id}`} placeholder="Edit text"/>
                  <Button className="commentEdit" data-id={_id}>Edit comment</Button>
                </FormGroup>
              </Form>
              <Button className="commentDelete" data-id={_id}>Delete comment</Button>
            </CardBody>
          </Card>
        </Col>
      </Fragment>
    )
  }
}
