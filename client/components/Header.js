import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import icon from '../assets/directory-icon.jpg';
import { NavLink } from 'react-router-dom';
import { getInitialDataValue } from '../services/initialData';

const useStyles = makeStyles({
  logo: {
    height: 50,
    width: 50,
  },
  navLink: {
    textDecoration: 'none'
  },
  authButton: {
    marginLeft: 'auto',
  }
});

const Header = ({ currentUser }) => {
  if (!currentUser) {
    currentUser = getInitialDataValue('currentUser');
  }
  const styles = useStyles();

  const renderAuthButton = () => {
    return (<Button className={styles.authButton}>
      {
        currentUser
        ? <a href="/api/logout" className={styles.avLink}>Logout</a>
        : <a href="/api/auth/google" className={styles.navLink}>Login</a>
      }
    </Button>);
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" justifyContent="center" alignItems="center" mr={2}>
          <img src={icon} alt="directory" className={styles.logo} />
        </Box>
        <Box display="flex" flexGrow={1}>
          <NavLink to="/" className={styles.navLink}>
            <Button>
              Home
            </Button>
          </NavLink>
          <NavLink to="/users" className={styles.navLink}>
            <Button>
              Users
            </Button>
          </NavLink>
          {renderAuthButton()}
        </Box>
      </Toolbar>
    </AppBar>
  )
};

export default Header;
