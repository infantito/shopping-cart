const { FLAG_CODE, AT_BEGINNING, CODE_LENGTH } = require('constants/success');

const formatShippingCode = (id = 1) => {
  const key = `${AT_BEGINNING}${id}`;
  const code = `${FLAG_CODE}${key.substr(-CODE_LENGTH)}`;

  return code;
};

export { formatShippingCode };
