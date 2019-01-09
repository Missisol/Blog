import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Card, Button, CardHeader, CardBody, CardTitle, CardText} from 'reactstrap';


export default class OneUser extends Component {

  render() {
    const { user } = this.props;

    return (
      <Fragment>
            <Card key={user._id} id={user._id}>
              <CardBody>
                <CardTitle>{user.username}</CardTitle>
                <CardText>{user.email}</CardText>
                <Link to={`/users`}><Button>Back</Button></Link>
              </CardBody>
            </Card>
      </Fragment>
    )
  }
}