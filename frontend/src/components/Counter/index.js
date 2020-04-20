import React, { memo, useRef, useEffect } from 'react';
import { Minus, Plus } from 'components/Counter/Marks';
import ButtonBox, { Handler } from 'components/Counter/styles';

const Counter = memo(({ handleAdding, product, handleDelete }) => {
  return (
    <ButtonBox>
      <button type="button" onClick={handleAdding}>
        {product.quantity ?? <Plus />}
      </button>
      <button type="button" onClick={handleDelete(product.id)}>
        delete
      </button>
    </ButtonBox>
  );
});

const Accumulator = memo(
  ({ product, index, handleBlurAccumulator, handleChange, handleDelete }) => {
    const containerRef = useRef(null);
    const value = product.quantity ?? 1;

    useEffect(() => {
      containerRef.current.focus();
    }, []);

    return (
      <Handler>
        <div
          className="handler-content"
          ref={containerRef}
          tabIndex={index}
          onBlur={handleBlurAccumulator}
        >
          <button type="button" onClick={handleChange(-1)}>
            <Minus />
          </button>
          <input
            type="tel"
            maxLength="4"
            placeholder="1234"
            onChange={handleChange(null)}
            value={value}
          />
          <button type="button" onClick={handleChange(1)}>
            <Plus />
          </button>
        </div>
        <button type="button" onClick={product.id && handleDelete(product.id)}>
          delete
        </button>
      </Handler>
    );
  },
);

export { Counter as default, Accumulator };
