import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { StyleSheet, css } from 'aphrodite';
import SvgIcon from '../../../components/SvgIcon';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  eventTextContainer: {
    textAlign: 'center',
    fontSize: '0.7rem',
  },
  cityTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  cityText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cityContainer: {
    minWidth: '200px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  typeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: '0.5rem',
  },
  link: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    color: 'lightgray',
    width: '50%',
    textDecoration: 'none',
  },
  activeLink: {
    color: 'white',
    boxShadow: 'inset 0 -5px',
  },
});

const DropDownIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M7 10l5 5 5-5z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </SvgIcon>
);

class EventFilter extends Component {

  render() {
    const sportslink = `/city/${this.props.city}?type=sports`;
    const showslink = `/city/${this.props.city}?type=shows`;
    return (
      <div className={css(styles.container)} >
        <div className={css(styles.cityContainer)} >
          <Link to={'/selectCity'} className={css(styles.link)} activeClassName={css(styles.activeLink)} >
            <div>
              <div className={css(styles.eventTextContainer)} >EVENTS IN</div>
              <div className={css(styles.cityTextContainer)} > <DropDownIcon /> <div className={css(styles.cityText)} > {this.props.city} </div> </div>
            </div>
          </Link>
        </div>
        <div className={css(styles.typeContainer)} >
          <Link to={sportslink} className={css(styles.link)} activeClassName={css(styles.activeLink)} >
            Sports
          </Link>
          <Link to={showslink} className={css(styles.link)} activeClassName={css(styles.activeLink)} >
            Shows
          </Link>
        </div>
      </div>
    );
  }
}

EventFilter.propTypes = {
  city: PropTypes.string.isRequired,
  // type: PropTypes.string.isRequired,

};


export default EventFilter;

