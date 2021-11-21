import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
const setToken = token => axios.defaults.headers.common.Authorization = `Bearer ${token}`;
const unsetToken = () => axios.defaults.headers.common.Authorization = '';

const signup = createAsyncThunk('user/signup', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    setToken(data.token);
    return data;
  } catch (error) {
    return error.message;
  }
});
const login = createAsyncThunk('user/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    setToken(data.token);
    return data;
  } catch (error) {
    return error.message;
  }
});
const logout = createAsyncThunk('user/logout',async () => {
  try {
    await axios.post('/users/logout');
    unsetToken();
  } catch (error) {
    return error.message;
  }
});
const refresh = createAsyncThunk('user/refresh',async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('No valid token!');
    }
    setToken(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
    return error.message;
  }
});



const authOperations = {signup, login, logout, refresh};

export default authOperations;
