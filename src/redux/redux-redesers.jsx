import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { fetchItem } from './operetions';
import {
  addItemRequest,
  addToSuccess,
  addItemError,
  removeItemError,
  removeItemRequest,
  removeToSuccess,
  changeFilter,
} from './redux-action';
export const item = createReducer([], {
  [addToSuccess]: (state, action) => {
    return [...state, action.payload].sort((firstStudent, secondStudent) =>
      firstStudent.name.localeCompare(secondStudent.name)
    );
  },
  [removeToSuccess]: (state, action) => {
    return [...state.filter(item => item.id !== action.payload)];
  },
  [fetchItem.fulfilled]: (state, action) => {
    console.log(action.payload);
    return action.payload.sort((firstStudent, secondStudent) =>
      firstStudent.name.localeCompare(secondStudent.name)
    );
  },
});
export const filter = createReducer('', {
  [changeFilter]: (state, action) => {
    return action.payload;
  },
});
export const loader = createReducer(false, {
  [addItemRequest]: () => true,
  [addToSuccess]: () => false,
  [addItemError]: () => false,
  [removeItemRequest]: () => true,
  [removeToSuccess]: () => false,
  [removeItemError]: () => false,
  [fetchItem.pending]: () => true,
  [fetchItem.rejected]: () => false,
  [fetchItem.fulfilled]: () => false,
});

export default combineReducers({ item, filter, loader });
