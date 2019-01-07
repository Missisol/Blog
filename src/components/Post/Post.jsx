import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Button, CardHeader, CardBody,
  CardTitle, CardText, Col } from 'reactstrap';


export default class Post extends Component {

  render() {
    const { author, email, title, text, _id } = this.props;

    return (
      <Fragment>
          <Col sm="6 mb-3">
            <Card>
              <CardHeader>{author}, {email}</CardHeader>
              <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardText>{text}</CardText>
                <Link to={`/post/${_id}`}><Button>Go to post</Button></Link>
              </CardBody>
            </Card>
          </Col>
      </Fragment>
    )
  }
}