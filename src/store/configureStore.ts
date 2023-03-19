// Third party package
import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
// Reducers
import appReducer from './reducer';
// Middleware
import logger from "./middleware/logger";
import api from "./middleware/api";
// api
import { signoutRequest } from "./api";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const rootReducer = (state, action) => {
    if (action.type === signoutRequest.type) {
        AsyncStorage.removeItem('persist:root')

        return appReducer(undefined, action);
    } 

    return appReducer(state, action);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(api)
});

export const persistor = persistStore(store);