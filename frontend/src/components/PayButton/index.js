import React from 'react';
import Button from 'components/PayButton/styles';

const PayButton = props => {
  return (
    <Button type="button" disabled={props.isActive}>
      COMPLETE ORDER
    </Button>
  );
};

export default React.memo(PayButton);
