import {
  LOCAL,
  CURRENCY_OPTIONS,
  DATE_OPTIONS,
  SHIPPING_COST,
  TAXES,
} from 'constants/billing';

const IntlMoney = new Intl.NumberFormat(LOCAL, CURRENCY_OPTIONS);
const IntlDate = new Intl.DateTimeFormat(LOCAL, DATE_OPTIONS);

const formatMoney = amount => IntlMoney.format(amount ?? 0);
const formatDate = date => IntlDate.format(date ?? new Date());
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

export { formatMoney, formatDate, getBilling };
