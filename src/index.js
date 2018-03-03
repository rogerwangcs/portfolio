import React from 'react';
import {render} from 'react-dom'
import {HashRouter} from 'react-router-dom'

import {Provider} from "react-redux";
import store from "store/index";

import App from 'containers/App.js';

import registerServiceWorker from './registerServiceWorker';

render((
  <Provider store={store}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>
), document.getElementById('root'));

// the service worker allows the app to load faster by cacheing assets locally
// and serving it the next visit. service worker disabled for github pages.
// registerServiceWorker();