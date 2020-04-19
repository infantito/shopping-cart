import React from 'react';
import { Minus, Plus } from 'components/Counter/Marks';
import ButtonBox, { Handler } from 'components/Counter/styles';

const Counter = props => {
  return (
    <ButtonBox>
      <button type="button">✕</button>
      <button type="button">delete</button>
    </ButtonBox>
  );
};

const Accumulator = props => {
  return (
    <Handler>
      <div className="handler-content">
        <button type="button">
          <Minus />
        </button>
        <input type="tel" maxLength="4" placeholder="1234" />
        <button type="button">
          <Plus />
        </button>
      </div>
    </Handler>
  );
};

export { Counter as default, Accumulator };
