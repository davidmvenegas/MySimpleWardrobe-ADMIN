import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage";
import userReducer from "./userRedux"
import productRedcer from "./productRedux"

const persistConfig = {
    key: "root",
    version: 1,
    storage,
}

const rootReducer = combineReducers({ user: userReducer, product: productRedcer })
const persistentReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistentReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: {ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]}})
})

export let persistor = persistStore(store)