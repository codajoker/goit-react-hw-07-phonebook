import { createAction } from '@reduxjs/toolkit';

export const addItemRequest = createAction('item/addItemRequest');
export const addToSuccess = createAction('item/addToSuccess');
export const addItemError = createAction('item/addItemError');
export const removeItemRequest = createAction('item/removeItemRequest');
export const removeToSuccess = createAction('item/removeToSuccess');
export const removeItemError = createAction('item/removeItemError');
export const fetchItemRequest = createAction('item/fetchItemRequest');
export const fetchToSuccess = createAction('item/fetchToSuccess');
export const fetchItemError = createAction('item/fetchItemError');
export const changeFilter = createAction('filter/change');
