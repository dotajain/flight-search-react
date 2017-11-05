import React from 'react';
import { connect } from 'react-redux';

import Home from './Home';

const App = () => (
  <div className="c-app">
    <main className="c-main">
      <Home />
    </main>
  </div>
);

export default connect(state => state)(App);
