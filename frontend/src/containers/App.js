import React from 'react';
import { Router } from '@reach/router';
import { ApolloProvider } from '@apollo/react-hooks';
import Template from 'containers/Template';
import Home from 'pages/Home';
import ThankYou from 'pages/ThankYou';
import { HOME, THANK_YOU } from 'constants/paths';
import client from 'config/client';

function App() {
  return (
    <Router>
      <Template path={HOME}>
        <ApolloProvider client={client} path={HOME}>
          <Home path={HOME} />
          <ThankYou path={THANK_YOU} />
        </ApolloProvider>
      </Template>
    </Router>
  );
}

export default App;
