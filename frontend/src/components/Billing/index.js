import React, { useMemo } from 'react';
import BillingBox from 'components/Billing/styles';
import { formatMoney, getBilling } from 'utils/billing';

const Billing = ({ cart }) => {
  const { shipping, subtotal, taxes } = useMemo(() => {
    const values = Array.from(cart.values());
    return getBilling(values);
  }, [cart]);

  return (
    <BillingBox>
      <div className="summary-cart">
        <div className="detail">
          <div className="detail-row">
            <p className="text">Products</p>
            <span className="text">{formatMoney(subtotal)}</span>
          </div>
          <div className="detail-row shipping">
            <p className="text">Shipping Cost</p>
            <span className="text">{formatMoney(shipping)}</span>
          </div>
          <div className="detail-row">
            <p className="text">Taxes</p>
            <span className="text">{formatMoney(subtotal * taxes)}</span>
          </div>
        </div>
        <div className="total">
          <p className="text">Total</p>
          <span className="text">{formatMoney(subtotal + shipping)}</span>
        </div>
      </div>
    </BillingBox>
  );
};

export default React.memo(Billing);
