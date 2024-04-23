import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userReducers } from "../Reducers/userReducers";

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducers);

export const myStore = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(myStore);
