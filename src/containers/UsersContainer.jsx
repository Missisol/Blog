import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import { getUsers } from 'actions/usersAction';

import UsersList from 'components/UsersList';
import $ from 'jquery';

class UsersContainer extends Component {

  componentDidMount() {
    const { getUsers } = this.props;

    getUsers();
  }

  render() {
    const { users, loadingUsers } = this.props;

    return (
      <Fragment>
        <UsersList users={users}/>
        {loadingUsers ? 'loading users' : ''}
      </Fragment>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    ...props,
    users: state.users.users,
    loadingUsers: state.users.loadingUsers,
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    getUsers: () => dispatch(getUsers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);