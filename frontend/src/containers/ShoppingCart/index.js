import React from 'react';
import SearchField from 'components/SearchField';
import Product from 'components/Product';
import Empty from 'components/Empty';
import Shopping from 'containers/ShoppingCart/styles';

const ShoppingCart = props => {
  return (
    <Shopping>
      <div className="shopping-box">
        <SearchField />
      </div>
      <div className="shopping-box">
        <ul className="shopping-box-content">
          <Product />
          <Product />
          <Product />
          <Product />
        </ul>
      </div>
    </Shopping>
  );
};

export default ShoppingCart;
