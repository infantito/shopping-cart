import React from 'react';
import Input from 'components/SearchField/styles';

const SearchField = props => {
  return (
    <Input
      type="search"
      maxLength="150"
      placeholder="Search Products"
      autoComplete="off"
    />
  );
};

export default SearchField;
