import React from 'react';
import Button from 'components/PayButton/styles';
import { Spinner } from 'components/Loader';

const PayButton = ({ isActive, loading, handlePay }) => {
  return (
    <Button type="button" disabled={isActive || loading} onClick={handlePay}>
      COMPLETE ORDER {loading ? <Spinner /> : null}
    </Button>
  );
};

export default React.memo(PayButton);
