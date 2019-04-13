import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Grid } from 'react-flexbox-grid';
import { FaSignOutAlt } from 'react-icons/fa';
import { logout } from 'api/auth/auth-actions';
import { connect } from 'react-redux';

import { getAccessToken } from 'api/auth/token-utils';

const Header = ({ handleLogout }) => {
  const isLoggedIn = !!getAccessToken();

  return (
    <Navbar bg='light' expand='lg'>
      <Grid>
        <Navbar.Brand href='/'>PiggyBank</Navbar.Brand>
        {isLoggedIn &&
          <React.Fragment>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='mr-auto'>
                <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <FaSignOutAlt onClick={handleLogout} />
          </React.Fragment>
        }
      </Grid>
    </Navbar>
  );
};

export default connect(
  null,
  dispatch => ({
    handleLogout () {
      dispatch(logout());
    }
  })
)(Header);
