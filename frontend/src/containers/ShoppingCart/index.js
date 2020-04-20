import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Loader from 'components/Loader';
import SearchField from 'components/SearchField';
import Product from 'components/Product';
import Empty, { NotFound } from 'components/Empty';
import AppContext from 'containers/App/Context';
import ALL_PRODUCTS from 'containers/ShoppingCart/ALL_PRODUCTS';
import Shopping from 'containers/ShoppingCart/styles';

const Bag = ({ cart, searching, response }) => {
  const { data, loading, error } = response;
  let products = [];

  if (loading) return <Loader />;

  if (searching) {
    if (error || data?.products?.length === 0) {
      return <NotFound />;
    }

    products = data?.products || [];
  } else if (cart.size === 0) {
    return <Empty />;
  } else {
    products = Array.from(cart.values());
  }

  return (
    <>
      {products.map(product => (
        <Product product={product} key={product.id} counter={!!searching} />
      ))}
    </>
  );
};

const ShoppingCart = _ => {
  const [{ searching, cart }] = useContext(AppContext);
  const name = searching.trim();

  const response = useQuery(ALL_PRODUCTS, {
    variables: { input: { name } },
    skip: !name,
  });

  return (
    <Shopping>
      <div className="shopping-box">
        <SearchField />
      </div>
      <div className="shopping-box">
        <ul className="shopping-box-content">
          <Bag searching={name} cart={cart} response={response} />
        </ul>
      </div>
    </Shopping>
  );
};

export default ShoppingCart;
