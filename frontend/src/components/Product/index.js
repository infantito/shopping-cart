import React from 'react';
import ProductBox from 'components/Product/styles';
import Counter from 'components/Counter';

const Product = ({ id, image, name, price }) => {
  return (
    <ProductBox>
      <data value={id}>
        <div className="product-content">
          <div className="product-image">
            <img src={image} alt="📦" />
          </div>
          <div className="product-info">
            <div className="product-info-content">
              <h3 className="title">{name}</h3>
              <span className="price">{price}</span>
            </div>
          </div>
          <Counter />
        </div>
      </data>
    </ProductBox>
  );
};

export default Product;
