import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
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

const ThankYou = ({ shippingId }) => {
  const code = formatShippingCode(shippingId);

  return (
    <Section>
      <h3 className="title">Thank You</h3>
      <p className="message">Your order {code} has been registered</p>
      <Link to={HOME}>Continue shopping</Link>
      <img src={success} alt="📦" />
    </Section>
  );
};

export default ThankYou;
