import { createReducer, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import actions from './action-creators';

import authReducer from './authentification/auth-reducer';
import itemsReducer from './contacts/contacts-reducer';


const authPersistConfig = {
  key: 'currentUser',
  storage,
  whitelist: ['token']
}

const filter = createReducer('', {
  [actions.changeContactsFilter]: (_, {payload}) => payload
});


const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    filter,
    contacts: itemsReducer
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })],
  devTools: process.env.NODE_ENV === 'development'
});
const persistor = persistStore(store);

const storeObj = {store, persistor};

export default storeObj;


