import React from 'react';
import ProductBox from 'components/Product/styles';
import Counter, { Accumulator } from 'components/Counter';
import { formatMoney } from 'utils/billing';

const Product = ({ id, image, name, price }) => {
  const amount = formatMoney(price);

  return (
    <ProductBox>
      <data value={id}>
        <fieldset className="fieldset" disabled>
          <div className="product-content">
            <div className="product-image">
              <img src={image} alt="📦" />
            </div>
            <div className="product-info">
              <div className="product-info-content">
                <h3 className="title">{name ?? 'unknown'}</h3>
                <span className="price">{amount}</span>
              </div>
            </div>
            <Counter />
          </div>
          <Accumulator />
        </fieldset>
      </data>
    </ProductBox>
  );
};

export default React.memo(Product);
