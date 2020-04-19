import styled from 'styled-components';

export default styled.li`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.border};

  .product {
    &-image {
      width: 80px;
      height: 80px;
    }

    &-info {
      &-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 5.5rem;
      }
    }
  }

  img {
    width: inherit;
    height: inherit;
  }

  .title {
    font-size: 1.6rem;
    margin: 0 auto;
  }

  .price {
    color: ${props => props.theme.danger};
    display: block;
    font-size: 2rem;
    font-weight: 600;
  }

  .product {
    &-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 106px;
      padding: 1rem 2.5rem;
    }
  }
`;
