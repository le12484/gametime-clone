import React, { Component, PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import { browserHistory } from 'react-router';

import SeatCard from '../components/SeatCard';
import EventDetailHeader from '../components/EventDetailHeader';

import { getEvents } from '../EventActions';
import { getEvent } from '../EventReducer';

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

const seatingData = [
  {
    seat: 'QQ, Row 1',

  },
  {
    seat: 'KK, Row 10',

  },
  {
    seat: 'AA, Row 1',

  },
];

class EventDetailsPage extends Component {


  _renderList() {
    const list = [];
    seatingData.forEach((seating) => {
      list.push(<SeatCard key={seating.seat} title={seating.seat} />);
    });
    return list;
  }
  render() {
    return (
      <div className={css(styles.container)} >
        <EventDetailHeader title={this.props.event.title} location={this.props.event.location} />
        <div className={css(styles.listContainer)} >
          {this._renderList()}
        </div>
      </div>
    );
  }
}

EventDetailsPage.need = [(params, query) => {
  console.log('EventDetailsPage.need params', params);
  console.log('EventDetailsPage.need query', query);
  return getEvents(query.city, query.type);
}];


EventDetailsPage.propTypes = {
  event: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
};

const mapStateToProps = (store, props) => {
  console.log(store);
  console.log(props);
  console.log(getEvent(store, props.params.eventId));
  return {
    event: getEvent(store, props.params.eventId),
  };
};


export default connect(mapStateToProps)(EventDetailsPage);
