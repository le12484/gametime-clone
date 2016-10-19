/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';

import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  whiteText: {
    color: 'white',
    textAlign: 'center',
  }

});

const Account = () => <h1 className={css(styles.whiteText)} >Welcome to Account Page!</h1>;
const Friends = () => <h1 className={css(styles.whiteText)} > Welcome to My Friends Page!</h1>;
const MyTickets = () => <h1 className={css(styles.whiteText)} >Welcome to My Tickets Page!</h1>;


// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/Event/pages/EventListPage');
  require('./modules/Event/pages/EventListPage');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Event/pages/EventListPage').default);
        });
      }}
    />

    <Route
      path="/city/:city"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Event/pages/EventListPage').default);
        });
      }}
    />

    <Route
      path="/event/:eventId"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Event/pages/EventDetailsPage').default);
        });
      }}
    />


    <Route
      path="/selectCity"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/User/pages/SelectCityPage').default);
        });
      }}
    />
    <Route path="/account" component={Account} />
    <Route path="/friends" component={Friends} />
    <Route path="/mytickets" component={MyTickets} />

  </Route>
);
