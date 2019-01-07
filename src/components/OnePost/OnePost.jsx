import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Card, Button, CardHeader, CardBody, CardTitle, CardText} from 'reactstrap';


export default class OnePost extends Component {

  render() {
    const {post} = this.props;

    return (
      <Fragment>
        {post.map((onepost =>
            <Card key={onepost._id} id={onepost._id}>
              <CardHeader>{onepost.author}, {onepost.email}</CardHeader>
              <CardBody>
                <CardTitle>{onepost.title}</CardTitle>
                <CardText>{onepost.text}</CardText>
                <Link to={`/posts`}><Button>Back</Button></Link>
              </CardBody>
            </Card>
        ))}
      </Fragment>
    )
  }
}