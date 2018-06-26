import React from 'react';
import {render} from 'react-dom'
import {HashRouter} from 'react-router-dom'

import App from 'screens/App.js';

import registerServiceWorker from 'utils/registerServiceWorker';

render((
    <HashRouter>
      <App/>
    </HashRouter>
), document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}