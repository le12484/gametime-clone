import React, { Component, PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import Cities from '../../../assets/cities.json';
import { browserHistory, Link } from 'react-router';
import { setUserLocation } from '../UserActions';

const styles = StyleSheet.create({
  container: {
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    paddingTop: '0.75rem',
    textDecoration: 'none',
    color: 'white',
  },
});

class SelectCityPage extends Component {

  handleSelectUserLocation(city) {
    browserHistory.push(`/city/${city}?type=${this.props.type}`);
    this.props.dispatch(setUserLocation(city));
  }
  handleCancel() {
    browserHistory.goBack();
  }
  render() {
    const options = [];
    Cities.forEach(city => {
      options.push(
        <Link to={`/city/${city}?type=${this.props.type}`} className={css(styles.listItem)} >
          {city}
        </Link>
      );
    });

    return (
      <div className={css(styles.container)} >
        <div className={css(styles.listItem)} onClick={this.handleCancel.bind(this)} > Cancel </div>
        {options}
      </div>
    );
  }
}

SelectCityPage.propTypes = {

  city: PropTypes.string,
  type: PropTypes.string,
  dispatch: PropTypes.func,
};

const mapStateToProps = (store) => {
  return {
    city: store.user.userLocation,
    type: store.user.eventType,
  };
};

export default connect(mapStateToProps)(SelectCityPage);
