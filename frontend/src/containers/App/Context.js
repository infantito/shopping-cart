import React from 'react';

const initialState = {
  cart: new Map(),
  searching: '',
  quantity: 0,
  order: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'counter': {
      const cart = new Map([...state.cart]);
      const { product, quantity } = action;
      const item = cart.get(product.id);

      if (item) {
        if (!quantity) {
          cart.set(product.id, {
            ...item,
            quantity,
            temp: item.quantity,
          });
        } else {
          if (quantity > 0) {
            cart.set(product.id, {
              ...item,
              quantity,
            });
          } else {
            cart.delete(product.id);
          }
        }
      } else if (quantity > 0) {
        cart.set(product.id, {
          ...product,
          quantity,
        });
      }

      return {
        ...state,
        cart,
      };
    }
    case 'searching': {
      return {
        ...state,
        searching: action.searching,
      };
    }
    case 'delete': {
      const cart = new Map([...state.cart]);
      cart.delete(action.id);

      return {
        ...state,
        cart,
      };
    }
    case 'reset': {
      return {
        quantity: 0,
        cart: new Map(),
        searching: '',
        order: null,
      };
    }
    default:
      throw new Error(`That action type isn't supported.`);
  }
};
const AppContext = React.createContext(initialState);
const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext as default };
