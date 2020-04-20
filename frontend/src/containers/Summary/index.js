import React, { useContext } from 'react';
import SummaryBox from 'containers/Summary/styles';
import Billing from 'components/Billing';
import PayButton from 'components/PayButton';
import AppContext from 'containers/App/Context';
import { DELIVERY_DAY } from 'constants/billing';
import { formatDate } from 'utils/billing';
import car from 'assets/delivery.svg';

const Summary = () => {
  const [{ cart }] = useContext(AppContext);
  const now = new Date();
  now.setDate(now.getDate() + DELIVERY_DAY);
  const date = formatDate(now);

  return (
    <SummaryBox>
      <div className="shopping-box">
        <img src={car} alt="🛒" />
        <p className="delivery">
          Buy now and get it by <b>{date}</b>
        </p>
      </div>
      <div className="shopping-box">
        <Billing cart={cart} />
        <PayButton isActive={cart.size === 0} />
      </div>
    </SummaryBox>
  );
};

export default Summary;
