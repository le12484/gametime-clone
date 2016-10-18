
import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '0.4rem',
    marginTop: '0.15rem',
    marginBottom: '0.15rem',
    marginRight: '0.1rem',
    marginLeft: '0.1rem',
    overflow: 'hidden',
    '@media (max-width: 820px)': {
      width: '100%',
    },
    '@media (min-width: 820px)': {
      margin: '5px',
      maxWidth: '400px',
      width: '100%',
    },
  },
  image: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: 'black',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',

  },
  title: {
    fontWeight: 'bolder',
    padding: '0.3rem',
    width: '100%',
  },
});

import bg from '../../../assets/football1.jpeg';

const EventCard = (props) => {
  const inlineStyle = {
    backgroundColor: 'black',
    backgroundImage: `url(${bg})`,
  };

  return (
    <div className={css(styles.container)} >
      <div className={css(styles.image)} style={inlineStyle} >
        <div style={{ paddingBottom: '25%' }}>
        </div>
      </div>
      <div className={css(styles.title)} style={{ backgroundColor: props.color }} >
        {props.title.toUpperCase()}
      </div>
    </div >
  );
};


EventCard.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
};

export default EventCard;
