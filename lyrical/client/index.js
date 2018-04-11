import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloClient client={client}>
      <div>Lyrical</div>
    </ApolloClient>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
