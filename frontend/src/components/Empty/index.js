import React from 'react';
import EmptyBox from 'components/Empty/styles';
import cart from 'assets/cart.svg';

const Empty = props => {
  return (
    <EmptyBox>
      <img src={cart} alt="🛒" />
      <h3>Your cart is empty</h3>
      <p>Seems like you haven’t chosen what to buy...</p>
    </EmptyBox>
  );
};

export default Empty;
