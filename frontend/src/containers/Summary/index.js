import React, { useMemo, useContext } from 'react';
import SummaryBox from 'containers/Summary/styles';
import Billing from 'components/Billing';
import PayButton from 'components/PayButton';
import AppContext from 'containers/App/Context';
import { MIN_SHOPPING } from 'constants/billing';
import { getShippingDate, getBilling } from 'utils/billing';
import icon from 'assets/delivery.svg';

const Summary = () => {
  const [{ cart }] = useContext(AppContext);
  const date = getShippingDate(new Date());
  const { shipping, subtotal, taxes } = useMemo(() => {
    const values = Array.from(cart.values());
    return getBilling(values);
  }, [cart]);

  return (
    <SummaryBox>
      <div className="shopping-box">
        <img src={icon} alt="🛒" />
        <p className="delivery">
          Buy now and get it by <b>{date}</b>
        </p>
      </div>
      <div className="shopping-box">
        <Billing shipping={shipping} subtotal={subtotal} taxes={taxes} />
        <PayButton
          isActive={!(cart.size > 0 && subtotal + shipping >= MIN_SHOPPING)}
        />
      </div>
    </SummaryBox>
  );
};

export default Summary;
