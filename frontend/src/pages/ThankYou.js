import React, { useContext } from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';
import AppContext from 'containers/App/Context';
import { HOME } from 'constants/paths';
import { formatShippingCode } from 'utils/success';
import success from 'assets/success.png';

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .title {
    font-size: 1.75rem;
  }

  .title,
  .message {
    margin: 0 auto;
  }

  .message {
    padding: 1rem 0;
  }

  a {
    margin: 0 auto 1.75rem;
  }

  img {
    max-width: 308px;
    max-height: 288px;
    user-select: none;
  }
`;

const ThankYou = ({ location }) => {
  const [, dispatch] = useContext(AppContext);

  const handleShopping = e => {
    e.preventDefault();
    dispatch({ type: 'reset' });
    navigate(HOME);
  };
  const order = location.state?.order;
  const code = formatShippingCode(order);

  return (
    <Section>
      <h3 className="title">{order ? 'Thank You' : `Hey, don't go!`}</h3>
      <p className="message">
        {order
          ? `Your order ${code} has been registered`
          : 'Come and explore our world!'}
      </p>
      <a href={HOME} onClick={handleShopping}>
        {order ? 'Continue' : 'Start'} shopping
      </a>
      <img src={success} alt="📦" />
    </Section>
  );
};

export default ThankYou;
