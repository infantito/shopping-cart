import styled from 'styled-components';

export default styled.li`
  width: 100%;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${props => props.theme.border};
  }

  fieldset {
    appearance: none;
    border: 0;
    height: ${props => props.theme.product};
    margin: 0 auto;
    padding: 1rem 1rem 1rem 1.5rem;
    position: relative;

    &:disabled {
      .product-content {
        opacity: 0.25;
      }
    }
  }

  .product {
    &-content {
      display: flex;
      align-items: center;
      height: 100%;
    }

    &-image {
      width: 80px;
      height: 80px;
    }

    &-info {
      height: inherit;

      &-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: inherit;
      }
    }
  }

  img {
    width: inherit;
    height: inherit;
  }

  .title {
    color: ${props => props.theme.text};
    font-size: 1rem;
    font-weight: normal;
    margin: 0 auto;
  }

  .price {
    color: ${props => props.theme.danger};
    display: block;
    font-size: 1.325rem;
    font-weight: 600;
  }
`;
