import React, { useContext, useCallback, memo } from 'react';
import Input from 'components/SearchField/styles';
import AppContext from 'containers/App/Context';

const SearchField = _ => {
  const [state, dispatch] = useContext(AppContext);
  const handleChange = useCallback(
    ({ target }) => dispatch({ type: 'searching', searching: target.value }),
    [dispatch],
  );

  return (
    <Input
      type="search"
      maxLength="150"
      placeholder="Search Products"
      autoComplete="off"
      onChange={handleChange}
      value={state.searching}
      autoFocus
    />
  );
};

export default memo(SearchField);
