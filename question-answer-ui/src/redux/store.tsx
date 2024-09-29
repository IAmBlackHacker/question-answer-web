import {createStore, Reducer} from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './root-reducer';


const persistConfig = {
    key: 'root',
    storage,
    // blacklist: ['modal']
    // whiteList: ['navigation']
}

const persistedReducer = persistReducer(persistConfig, rootReducer as Reducer);

// export default () => {
//     let store = createStore(persistedReducer)
//     let persist_store = persistStore(store)
//     return { store, persist_store }
// }

export const store = createStore(persistedReducer);
export const persist_store = persistStore(store);
