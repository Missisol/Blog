import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Button, CardBody, CardTitle, CardText } from 'reactstrap';


export default class OneUser extends Component {

  render() {
    const { user } = this.props;

    return (
      <Fragment>
        {user.map(us =>
          <Card key={us._id} id={us._id}>
            <CardBody>
              <CardTitle>{us.username}</CardTitle>
              <CardText>{us.email}</CardText>
              <Link to={`/users`}><Button>Back</Button></Link>
            </CardBody>
          </Card>
        )}
      </Fragment>
    )
  }
}