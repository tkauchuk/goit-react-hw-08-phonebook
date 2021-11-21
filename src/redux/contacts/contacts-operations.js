import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getContacts = createAsyncThunk('user/contacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    return error.message;
  }
});

const addContact = createAsyncThunk('user/newContact', async user => {
  try {
    const { data } = await axios.post('/contacts', user);
    return data;
  } catch (error) {
    return error.message;
  }
});

const deleteContact = createAsyncThunk('user/deleteContact', async id => {
  try {
    await axios.delete(`contacts/${id}`);
    return id;
  } catch (error) {
    return error.message;
  }
})

const contactsOperations = {getContacts, addContact, deleteContact};

export default contactsOperations;