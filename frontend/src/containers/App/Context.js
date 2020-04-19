import React from 'react';

const initialState = {
  cart: new Map(),
  searching: '',
  quantity: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'counter':
      const cart = new Map([...state.cart]);
      const { product, quantity } = action;
      cart.set(product.id, {
        ...product,
        quantity: quantity + product.quantity,
      });

      return {
        ...state,
        cart,
      };
    case 'searching':
      return {
        ...state,
        searching: action.searching,
      };
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
