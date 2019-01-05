import './Menu.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';

@withRouter
export default class Menu extends Component {
  static propTypes = {
    titleBlog: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      })
    )
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const {items, titleBlog, location} = this.props;

    return (
      <Fragment>
        <Navbar color="light" light expand="md">
          <NavbarBrand className="text-primary font-weight-bold">{titleBlog}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {items.map((item, idx) => <NavItem className={location.pathname === item.href ? 'active' : ''} key={idx}><Link className="nav-link" to={item.href}>{item.title}</Link></NavItem>)}
            </Nav>
          </Collapse>
        </Navbar>
      </Fragment>
    )
  }
}

