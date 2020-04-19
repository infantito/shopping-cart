import React from 'react';
import { Router } from '@reach/router';
import { ApolloProvider } from '@apollo/react-hooks';
import Template from 'containers/App/Template';
import Home from 'pages/Home';
import ThankYou from 'pages/ThankYou';
import { HOME, THANK_YOU } from 'constants/paths';
import client from 'config/client';

function Unnecessary(props) {
  return <article>{props.children}</article>;
}

function App() {
  return (
    <Template>
      <Router primary={false} component={Unnecessary}>
        <ApolloProvider client={client} path={HOME}>
          <Home path={HOME} />
          <ThankYou path={THANK_YOU} />
        </ApolloProvider>
      </Router>
    </Template>
  );
}

export default App;
