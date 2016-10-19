import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { StyleSheet, css } from 'aphrodite';
import SvgIcon from '../../../components/SvgIcon';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '1rem',
  },
  location: {
    flexDirection: 'column',
    alignItems: 'center',
    color: 'gray',
  },
  title: {
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
  }


});

const DropDownIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M7 10l5 5 5-5z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </SvgIcon>
);

const EventDetailHeader = (props) => {
  return (
    <div className={css(styles.container)} >
      <div className={css(styles.location)}>
        {props.location}
      </div>
      <div className={css(styles.title)} >
        {props.title}
      </div>
    </div>
  );
};

EventDetailHeader.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,

};


export default EventDetailHeader;

