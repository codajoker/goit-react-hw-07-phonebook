// После
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import combine from './redux-redesers';

export const store = configureStore({
  reducer: {
    contacts: combine,
  },
});
