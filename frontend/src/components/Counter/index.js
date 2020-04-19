import React from 'react';
import Button from 'components/Counter/styles';

const Counter = props => {
  return (
    <div>
      <Button type="button">✕</Button>
      <button type="button">delete</button>
    </div>
  );
};

export default Counter;
