import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';

import App from './App';
// import { UserProvider } from './contexts/user.context';
// import { CategoriesProvider } from './contexts/categories.context';
// import { CartProvider } from './contexts/cart.context';
import { store, persistor } from './store/store';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter>
          {/* <UserProvider> */}
          {/* <CategoriesProvider> */}
          {/* <CartProvider> */}
          <App />
          {/* </CartProvider> */}
          {/* </CategoriesProvider> */}
          {/* </UserProvider> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
