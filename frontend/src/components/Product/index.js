import React, { useState, useContext, useCallback } from 'react';
import Counter, { Accumulator } from 'components/Counter';
import ProductBox from 'components/Product/styles';
import AppContext from 'containers/App/Context';
import { formatMoney } from 'utils/billing';
import { isNumeric } from 'utils/product';

const Product = ({ product }) => {
  const [state, dispatch] = useContext(AppContext);
  const { id, image, name, price } = product;
  const item = state.cart.get(id) || {};
  const amount = formatMoney(price);
  const [accumulator, setAccumulator] = useState(false);
  const handleAdding = _ => {
    dispatch({
      type: 'counter',
      product,
      quantity: item.quantity ?? 0 + 1,
    });
    setAccumulator(true);
  };
  const handleAccumulator = quantity => e => {
    if (quantity) {
      const total = +item.quantity + quantity;

      if (total) {
        dispatch({
          type: 'counter',
          product,
          quantity: total > product.quantity ? product.quantity : total,
        });
      } else {
        accumulator && setAccumulator(false);
        dispatch({
          type: 'delete',
          id,
        });
      }
    } else {
      let value = e.target.value ?? 0;
      const char = e.nativeEvent?.data;
      value = isNumeric(value) ? value : value.replace(char, '');

      dispatch({
        type: 'counter',
        product,
        temp: +item.quantity,
        quantity: value > product.quantity ? product.quantity : value,
      });
    }
  };
  const handleBlurAccumulator = useCallback(
    e => {
      const related =
        e.relatedTarget ||
        e.nativeEvent?.explicitOriginalTarget ||
        document.activeElement;
      const blur = e.currentTarget.parentNode.contains(related);

      if (!blur) {
        setAccumulator(blur);

        if (item.temp && !item.quantity) {
          dispatch({
            type: 'counter',
            product,
            quantity: item.temp,
          });
        }
      }
    },
    [item, dispatch, product],
  );
  const handleDelete = productId => _ => {
    accumulator && setAccumulator(false);
    if (productId) dispatch({ type: 'delete', id: productId });
  };

  return (
    <ProductBox>
      <data value={id}>
        <fieldset className="fieldset" disabled={accumulator}>
          <div className="product-content">
            <div className="product-image">
              <img src={image} alt="📦" />
            </div>
            <div className="product-info">
              <div className="product-info-content">
                <h3 className="title">{name}</h3>
                <span className="price">{amount}</span>
              </div>
            </div>
            {!accumulator ? (
              <Counter
                handleAdding={handleAdding}
                product={item}
                handleDelete={handleDelete}
                stock={product.quantity}
              />
            ) : null}
          </div>
        </fieldset>
        {accumulator ? (
          <Accumulator
            handleChange={handleAccumulator}
            handleBlurAccumulator={handleBlurAccumulator}
            product={item}
            index="0"
            handleDelete={handleDelete}
            stock={product.quantity}
          />
        ) : null}
      </data>
    </ProductBox>
  );
};

export default React.memo(Product);
