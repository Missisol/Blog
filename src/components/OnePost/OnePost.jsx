import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Card, Button, CardHeader, CardBody, CardTitle, CardText} from 'reactstrap';


export default class OnePost extends Component {

  render() {
    const { post } = this.props;

    return (
      <Fragment>
            <Card key={post._id} id={post._id}>
              <CardHeader>{post.author}, {post.email}</CardHeader>
              <CardBody>
                <CardTitle>{post.title}</CardTitle>
                <CardText>{post.text}</CardText>
                <Link to={`/posts`}><Button>Back</Button></Link>
              </CardBody>
            </Card>
      </Fragment>
    )
  }
}