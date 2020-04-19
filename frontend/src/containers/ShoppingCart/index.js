import React from 'react';
import TextField from 'components/TextField';
import Product from 'components/Product';
import Empty from 'components/Empty';
import Shopping from 'containers/ShoppingCart/styles';

const ShoppingCart = props => {
  return (
    <Shopping>
      <div className="shopping-box">
        <TextField />
      </div>
      <div className="shopping-box">
        <ul className="shopping-box-content"></ul>
      </div>
    </Shopping>
  );
};

export default ShoppingCart;
