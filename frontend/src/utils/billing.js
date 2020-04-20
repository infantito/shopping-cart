import {
  LOCAL,
  CURRENCY_OPTIONS,
  DATE_OPTIONS,
  SHIPPING_COST,
  DAY,
  TAXES,
  DELIVERY_DAY,
} from 'constants/billing';

const IntlMoney = new Intl.NumberFormat(LOCAL, CURRENCY_OPTIONS);
const IntlDate = new Intl.DateTimeFormat(LOCAL, DATE_OPTIONS);

const formatMoney = amount => IntlMoney.format(amount ?? 0);
const formatDate = date => IntlDate.format(date ?? new Date());
const getShippingDate = date => {
  const day = date.getDay();
  const days = Object.values(DAY);
  const willShipNextWeek = days.includes(day);

  if (willShipNextWeek) {
    if (DAY.Friday === day) date.setDate(date.getDate() + DELIVERY_DAY * 3);
    if (DAY.Saturday === day) date.setDate(date.getDate() + DELIVERY_DAY * 2);
  } else {
    date.setDate(date.getDate() + DELIVERY_DAY);
  }

  return formatDate(date);
};
const getBilling = data =>
  data.reduce(
    (billing, { price, quantity }) => {
      billing.subtotal += price * +quantity;

      return billing;
    },
    {
      taxes: TAXES,
      shipping: data.length && SHIPPING_COST,
      subtotal: 0,
    },
  );

export { formatMoney, formatDate, getBilling, getShippingDate };
