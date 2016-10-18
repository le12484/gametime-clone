import React, { Component, PropTypes } from 'react';

import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import { browserHistory } from 'react-router';

import EventCard from '../components/EventCard';

import EventFilter from '../components/EventFilter';

import { getEvents } from '../EventActions';

import { setEventType, setUserLocation } from '../../User/UserActions';


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    maxWidth: '820px',
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: 'black',
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    //width: '100%',
  },
});

class EventListPage extends Component {

  componentWillMount() {
    console.log("Will Mount");
    /*

    */

    let city;
    let type;
    if (this.props.params.city && this.props.city !== this.props.params.city) {
      city = this.props.params.city;
      this.props.dispatch(setUserLocation(city));
      return;
    }
    if (this.props.location.query.type && this.props.type !== this.props.location.query.type) {
      type = this.props.location.query.type;
      this.props.dispatch(setEventType(type));
      return;
    }
  }

  componentDidMount() {
    console.log("did Mount");
    if (!this.props.params.city || !this.props.location.query.type) {
      browserHistory.push(`/city/${this.props.city}?type=${this.props.type}`);
      this.props.dispatch(getEvents(this.props.city, this.props.type));
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log("will reievce");

    if (this.props.city !== nextProps.city || this.props.type !== nextProps.type) {
      console.log(`${this.props.city} !== ${nextProps.city} || ${this.props.type} !== ${nextProps.type}`);
      this.props.dispatch(getEvents(nextProps.city, nextProps.type));
      return;
    }

    /*
    if (!nextProps.params.city || !nextProps.location.query.type) {
      browserHistory.replace(`/city/${nextProps.city}?type=${nextProps.type}`);
    }
    */

    let city;
    let type;

    if (nextProps.params.city && this.props.city !== nextProps.params.city) {
      city = nextProps.params.city;
      this.props.dispatch(setUserLocation(city));
      return;
    }

    if (nextProps.location.query.type && this.props.type !== nextProps.location.query.type) {
      type = nextProps.location.query.type;
      this.props.dispatch(setEventType(type));
      return;
    }


  }
  /*
  shouldComponentUpdate(nextProps) {
    // if (this.nextProps.params.city !== nextProps.params.city || this.props.location.query.type !== nextProps.location.query.type) {
    //  return true;
    // }
    return nextProps.events !== this.props.events;
  }
  */
  handleSetEventType(type) {
    this.props.dispatch(setEventType(type));
  }

  _renderList() {
    const list = [];
    this.props.events.data.forEach((event) => {
      list.push(<EventCard color={event.color} key={event.id} title={event.title} />);
    });
    return list;
  }
  render() {
    console.log('Render EventListPage');
    return (
      <div className={css(styles.container)} >
        <EventFilter city={this.props.city} />
        <div className={css(styles.listContainer)} >
          {this._renderList()}
        </div>
      </div>
    );
  }
}


EventListPage.need = [(params, store) => {
  // console.log(store);
  // console.log(params);
  return getEvents(store.user.userLocation, store.user.eventType);
}];


EventListPage.propTypes = {
  events: PropTypes.object.isRequired,
  city: PropTypes.string,
  type: PropTypes.string,
  dispatch: PropTypes.func,
  location: PropTypes.object,
  params: PropTypes.object,
  eventUpdated: PropTypes.bool,
};
EventListPage.defaultProps = {
  city: 'Atlanta',
  type: 'sports',
};

const mapStateToProps = (store) => {
  // // console.log(state.pokemons.data);
  return {
    city: store.user.userLocation,
    type: store.user.eventType,
    eventUpdated: store.user.updated,
    events: store.events,
  };
};


export default connect(mapStateToProps)(EventListPage);
