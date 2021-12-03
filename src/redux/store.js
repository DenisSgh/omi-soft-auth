import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import authSlice from './auth/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice),
  },
  middleware: [thunkMiddleware],
  devTools: process.env.NODE_ENV === 'development', //Allows devtools only during development
});

export const persistor = persistStore(store);
