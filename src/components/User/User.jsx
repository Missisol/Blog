import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Button, CardHeader, CardBody,
  CardTitle, CardText, Col } from 'reactstrap';


export default class User extends Component {

  render() {
    const { username, email, _id } = this.props;

    return (
      <Fragment>
          <Col sm="6 mb-3">
            <Card>
              <CardHeader>{username}, {email}</CardHeader>
              <CardBody>
                <CardTitle>{}</CardTitle>
                <CardText>{}</CardText>
                <Link to={`/user/${_id}`}><Button>Go to post</Button></Link>
              </CardBody>
            </Card>
          </Col>
      </Fragment>
    )
  }
}