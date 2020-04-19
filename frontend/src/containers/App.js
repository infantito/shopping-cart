import React from 'react';
import { Router } from '@reach/router';
import Home from 'pages/Home';
import ThankYou from 'pages/ThankYou';
import { HOME, THANK_YOU } from 'constants/paths';

function App() {
  return (
    <Router>
      <Home path={HOME} />
      <ThankYou path={THANK_YOU} />
    </Router>
  );
}

export default App;
