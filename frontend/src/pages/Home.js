import React from 'react';
import styled from 'styled-components';
import ShoppingCart from 'containers/ShoppingCart';

const Section = styled.section`
  height: 656px;

  .home-searching {
    height: 100%;
  }
`;

const Home = props => {
  return (
    <Section>
      <div className="home-searching">
        <ShoppingCart />
      </div>
    </Section>
  );
};

export default Home;
