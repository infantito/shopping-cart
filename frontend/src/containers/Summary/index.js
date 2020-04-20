import React, { useMemo, useContext } from 'react';
import { navigate } from '@reach/router';
import { useMutation } from '@apollo/react-hooks';
import SummaryBox from 'containers/Summary/styles';
import Billing from 'components/Billing';
import PayButton from 'components/PayButton';
import AppContext from 'containers/App/Context';
import CREATE_ORDER from 'containers/Summary/CREATE_ORDER';
import { MIN_SHOPPING } from 'constants/billing';
import { THANK_YOU } from 'constants/paths';
import { getShippingDate, getBilling } from 'utils/billing';
import icon from 'assets/delivery.svg';

const Summary = () => {
  const [{ cart }] = useContext(AppContext);
  const date = getShippingDate(new Date());
  const { shipping, subtotal, taxes } = useMemo(() => {
    const values = Array.from(cart.values());
    return getBilling(values);
  }, [cart]);
  const [checkout, { loading, error, data }] = useMutation(CREATE_ORDER, {
    variables: {
      newOrder: {
        products: Array.from(cart.values()).map(product => ({
          id: +product.id,
          quantity: product.quantity,
          price: product.price,
        })),
      },
    },
  });
  const canCheckout = cart.size > 0 && subtotal + shipping >= MIN_SHOPPING;
  const handleCheckout = () => {
    if (canCheckout) checkout();
  };

  if (data?.createOrder?.id) {
    navigate(THANK_YOU, { state: { order: data.createOrder.id } });
  }

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
          isActive={!canCheckout}
          handlePay={handleCheckout}
          loading={loading || error}
        />
      </div>
    </SummaryBox>
  );
};

export default Summary;
