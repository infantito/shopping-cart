import React from 'react';
import styled from 'styled-components';
import ShoppingCart from 'containers/ShoppingCart';
import Summary from 'containers/Summary';

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 656px;

  .home {
    &-searching {
      padding: 0 1.5rem 0 0;
    }

    &-summary {
      padding: 0 0 0 1.5rem;
    }

    &-searching,
    &-summary {
      height: 100%;
      width: 380px;
    }
  }

  .shopping {
    &-box {
    }
  }
`;

const Home = () => {
  return (
    <Section>
      <div className="home-searching">
        <ShoppingCart />
      </div>
      <div className="home-summary">
        <Summary />
      </div>
    </Section>
  );
};

export default Home;
