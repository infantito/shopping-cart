import React from 'react';
import styled from 'styled-components';
import ShoppingCart from 'containers/ShoppingCart';
import Summary from 'containers/Summary';

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 656px;

  .home {
    &-searching {
      padding: 0 1.5rem 0 0;

      @media only screen and (max-width: 960px) {
        padding: 0;
        margin: 0 auto;
      }
    }

    &-summary {
      padding: 0 0 0 1.5rem;

      @media only screen and (max-width: 960px) {
        padding: 0;
        margin: 0 auto;
      }
    }

    &-searching,
    &-summary {
      height: 100%;
      width: 380px;

      @media only screen and (max-width: 960px) {
        width: 100%;
      }
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
