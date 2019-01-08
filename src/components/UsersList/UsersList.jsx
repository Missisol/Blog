import './UsersList.css';

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Row, Button} from 'reactstrap';
import User from 'components/User';


export default class UsersList extends Component {

  render() {
    const {users} = this.props;

    return (
      <div className="postsList">
        <h4 className="title">Users</h4>
        <Row>
          {users.map((user) => {
            return <User key={user._id} {...user} />
          })
          }
        </Row>
      </div>
    )
  }
}