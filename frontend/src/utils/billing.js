import { LOCAL, CURRENCY_OPTIONS, DATE_OPTIONS } from 'constants/billing';

const IntlMoney = new Intl.NumberFormat(LOCAL, CURRENCY_OPTIONS);
const IntlDate = new Intl.DateTimeFormat(LOCAL, DATE_OPTIONS);

const formatMoney = amount => IntlMoney.format(amount ?? 0);
const formatDate = date => IntlDate.format(date ?? new Date());

export { formatMoney, formatDate };
