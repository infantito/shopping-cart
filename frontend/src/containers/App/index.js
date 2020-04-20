import React from 'react';
import { Router } from '@reach/router';
import { ApolloProvider } from '@apollo/react-hooks';
import { AppProvider } from 'containers/App/Context';
import Template from 'containers/App/Template';
import Home from 'pages/Home';
import ThankYou from 'pages/ThankYou';
import { HOME, THANK_YOU } from 'constants/paths';
import client from 'config/client';

const Unnecessary = props => {
  return <article>{props.children}</article>;
};

const NotFound = () => (
  <div>
    <span role="img" aria-label="wrong">
      ❌
    </span>{' '}
    Sorry, nothing here.
  </div>
);

const App = _ => {
  return (
    <Template>
      <Router primary={false} component={Unnecessary}>
        <ApolloProvider client={client} path={HOME}>
          <AppProvider path={HOME}>
            <Home path={HOME} />
            <ThankYou path={THANK_YOU} />
            <NotFound default />
          </AppProvider>
        </ApolloProvider>
      </Router>
    </Template>
  );
};

export default App;
