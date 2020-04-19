import React from 'react';
import BillingBox from 'components/Billing/styles';
import { formatMoney } from 'utils/billing';

const Billing = ({ subtotal, shipping, taxes, total }) => {
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
            <span className="text">{formatMoney(taxes)}</span>
          </div>
        </div>
        <div className="total">
          <p className="text">Total</p>
          <span className="text">{formatMoney(total)}</span>
        </div>
      </div>
    </BillingBox>
  );
};

export default React.memo(Billing);
