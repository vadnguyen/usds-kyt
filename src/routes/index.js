
import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import App from '../containers/App';

// Webpack 2 supports ES2015 `System.import` by auto-
// chunking assets. Check out the following for more:
// https://gist.github.com/sokra/27b24881210b56bbaff7#code-splitting-with-es6

const importHome = (nextState, cb) => {
  System.import('../containers/Home')
    .then(module => cb(null, module.default))
    .catch((e) => { throw e; });
};

const importAccount = (nextState, cb) => {
  System.import('../containers/Account')
    .then(module => cb(null, module.default))
    .catch((e) => { throw e; });
};
const importNotSureYouOwe = (nextState, cb) => {
  System.import('../containers/NotSureYouOwe')
    .then(module => cb(null, module.default))
    .catch((e) => { throw e; });
};
const importPayByBank = (nextState, cb) => {
  System.import('../containers/PayByBank')
    .then(module => cb(null, module.default))
    .catch((e) => { throw e; });
};
const importPayByCard = (nextState, cb) => {
  System.import('../containers/PayByCard')
    .then(module => cb(null, module.default))
    .catch((e) => { throw e; });
};
const importNeedMoreTime = (nextState, cb) => {
  System.import('../containers/NeedMoreTime')
    .then(module => cb(null, module.default))
    .catch((e) => { throw e; });
};

// We use `getComponent` to dynamically load routes.
// https://github.com/reactjs/react-router/blob/master/docs/guides/DynamicRouting.md
const routes = (
  <Route path="/" component={App}>
    <IndexRoute getComponent={importHome} />
    <Route path="account" getComponent={importAccount} />
    <Route path="notsure" getComponent={importNotSureYouOwe} />
    <Route path="paybybank" getComponent={importPayByBank} />
    <Route path="paybycard" getComponent={importPayByCard} />
    <Route path="needmoretime" getComponent={importNeedMoreTime} />
  </Route>
);

// Unfortunately, HMR breaks when we dynamically resolve
// routes so we need to require them here as a workaround.
// https://github.com/gaearon/react-hot-loader/issues/288
if (module.hot) {
  require('../containers/Home');    // eslint-disable-line global-require
  require('../containers/Account');   // eslint-disable-line global-require
  require('../containers/NotSureYouOwe');   // eslint-disable-line global-require
  require('../containers/PayByBank');   // eslint-disable-line global-require
  require('../containers/PayByCard');   // eslint-disable-line global-require
  require('../containers/NeedMoreTime');   // eslint-disable-line global-require
}

export default routes;
