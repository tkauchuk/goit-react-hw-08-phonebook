import { createAsyncThunk } from '@reduxjs/toolkit';

const signup = createAsyncThunk('user/signup', () => {});
const login = createAsyncThunk('user/login', () => {});
const logout = createAsyncThunk('user/logout', () => {});
const refresh = createAsyncThunk('user/refresh', () => {});



const operations = {signup, login, logout, refresh};

export default operations;