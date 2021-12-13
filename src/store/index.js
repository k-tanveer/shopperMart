import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import Cart from './services/Cart';
import {productApi} from './services/products';

export const store = configureStore({
  reducer: combineReducers({
    [productApi.reducerPath]: productApi.reducer,
    carts: Cart,
  }),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);
