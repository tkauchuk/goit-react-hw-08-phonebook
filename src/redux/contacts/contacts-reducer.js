import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operations';

const initialState = {
  items: [],
  loaded: false
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  extraReducers: {
    [contactsOperations.getContacts.fulfilled](state, action) {
      state.items = action.payload;
      state.loaded = true;
    },
    [contactsOperations.addContact.fulfilled](state, action) {
      state.items.push(action.payload);
      state.loaded = true;
    },
    [contactsOperations.deleteContact.pending](state, _) {
      state.loaded = false;
    },
    [contactsOperations.deleteContact.fulfilled](state, action) {
      return { items: state.items.filter(item => item.id !== action.payload), loaded: true };
    }
  }
});

export default itemsSlice.reducer;