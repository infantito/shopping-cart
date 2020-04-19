import React from 'react';
import EmptyBox, { NotFoundBox } from 'components/Empty/styles';
import cart from 'assets/cart.svg';

const Empty = React.memo(_ => {
  return (
    <EmptyBox>
      <img src={cart} alt="🛒" />
      <h3>Your cart is empty</h3>
      <p>Seems like you haven’t chosen what to buy...</p>
    </EmptyBox>
  );
});

const NotFound = React.memo(_ => {
  return (
    <NotFoundBox>
      <p className="not-found">
        <span role="img" aria-label="sorry">
          😕
        </span>{' '}
        No results found.
      </p>
    </NotFoundBox>
  );
});

export { NotFound, Empty as default };
