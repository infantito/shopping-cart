import React from 'react';
import Input from 'components/TextField/styles';

const TextField = props => {
  return (
    <Input
      type="search"
      maxLength="150"
      placeholder="Search Products"
      autoComplete="off"
    />
  );
};

export default TextField;
