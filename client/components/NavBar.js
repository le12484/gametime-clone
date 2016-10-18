/*
*@flow
*/

import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import SvgIcon from './SvgIcon';

import { Link } from 'react-router';

const DiscoveryIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
  </SvgIcon>
);

const FriendsIcon = (props) => (

  <SvgIcon {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z" />
  </SvgIcon>

);

const MyTicketsIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M19.99 4c0-1.1-.89-2-1.99-2h-8L4 8v12c0 1.1.9 2 2 2h12.01c1.1 0 1.99-.9 1.99-2l-.01-16zM9 19H7v-2h2v2zm8 0h-2v-2h2v2zm-8-4H7v-4h2v4zm4 4h-2v-4h2v4zm0-6h-2v-2h2v2zm4 2h-2v-4h2v4z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </SvgIcon>
);

const ProfileIcon = (props) => (

  <SvgIcon {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </SvgIcon>

);


const styles = StyleSheet.create({

  HeaderHeight: {
    height: '3.28125rem',
    borderBottomWidth: '1px',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderStyle: 'solid',
    borderColor: 'lightgray'
  },
  Header: {
    position: 'relative',
    zIndex: 1,
  },
  NavBar: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    left: 0,
    top: 0,
    color: 'white',
    backgroundColor: 'black',
    width: '100%',
    alignItems: 'center',
    //border: 0,
    // borderBottomWidth: '1px',
    //borderColor: 'white',a
  },
  NavBarContainer: {
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '600px',
    height: '100%'

  },
  activeButton: {
    color: 'gray',
    // boxShadow: 'inset 0 -5px'
  },
  ButtonWidth: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '3.9375rem',
    color: 'white'

  },
  ButtonContainer: {
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'row',
    width: '100%',
    flexBasis: 'auto',
    height: '100%',
    justifyContent: 'space-between',

    // zIndex: 2,
  }
});


const NavBar = (props) => {
  return (
    <div className={css(styles.Header, styles.HeaderHeight)}>
      <div className={css(styles.NavBar, styles.HeaderHeight)}>
        <div className={css(styles.NavBarContainer)}>
          <div className={css(styles.ButtonContainer)} >
            <Link className={css(styles.ButtonWidth)} activeClassName={css(styles.activeButton)} to={`/city/${props.eventLocation}?type=${props.eventType}`}>
              <DiscoveryIcon viewBox="0 0 24 24" hoverColor="gray" />
            </Link>
            <Link className={css(styles.ButtonWidth)} activeClassName={css(styles.activeButton)} to="/friends">
              <FriendsIcon viewBox="0 0 24 24" hoverColor="gray" />
            </Link>
            <Link className={css(styles.ButtonWidth)} activeClassName={css(styles.activeButton)} to="/mytickets">
              <MyTicketsIcon viewBox="0 0 24 24" hoverColor="gray" />
            </Link>
            <Link className={css(styles.ButtonWidth)} activeClassName={css(styles.activeButton)} to="/account">
              <ProfileIcon viewBox="0 0 24 24" hoverColor="gray" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  eventLocation: PropTypes.string.isRequired,
  eventType: PropTypes.string.isRequired,
};

export default NavBar;
