import React from 'react';
import SummaryBox from 'containers/Summary/styles';
import Billing from 'components/Billing';
import PayButton from 'components/PayButton';
import { DELIVERY_DAY } from 'constants/billing';
import car from 'assets/delivery.svg';
import { formatDate } from 'utils/billing';

const Summary = () => {
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
        <Billing />
        <PayButton />
      </div>
    </SummaryBox>
  );
};

export default Summary;
