import axios from 'axios';
import {
  addItemRequest,
  addToSuccess,
  addItemError,
  removeItemRequest,
  removeToSuccess,
  removeItemError,
  fetchItemError,
  fetchItemRequest,
  fetchToSuccess,
} from './redux-action';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6214d79989fad53b1f210931.mockapi.io/';

export const addItem = item => dispatch => {
  dispatch(addItemRequest());
  const postItem = { name: item.name, phone: item.number };
  axios
    .post('/contacts', postItem)
    .then(({ data }) => dispatch(addToSuccess(data)))
    .catch(error => dispatch(addItemError(error)));
};
export const removeItem = id => dispatch => {
  dispatch(removeItemRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(removeToSuccess(id)))
    .catch(error => dispatch(removeItemError(error)));
};
// export const fetchItem = () => dispatch => {
//   dispatch(fetchItemRequest());
//   axios
//     .get('/contacts')
//     .then(({ data }) => dispatch(fetchToSuccess(data)))
//     .catch(error => dispatch(fetchItemError(error)));
// };

// First, create the thunk
export const fetchItem = createAsyncThunk('item/fetchItem', async () => {
  try {
    const items = await axios.get('/contacts');
    return items.data;
  } catch (error) {
    alert(error);
  }
});
