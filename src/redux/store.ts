import { rootReducer } from './reducers/rootReducer'
import { createStore , compose , applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const configureStore = () =>{
//     const thunkMiddleware = [thunk];
//     const store = createStore(
//         rootReducer,
//         compose(
//             applyMiddleware(...thunkMiddleware),
//         )
//     )
    
//     return store ;
// }

// export { configureStore }

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['currentDataReducer','inputFieldReducer'] // which reducer want to store
  };
const pReducer = persistReducer(persistConfig, rootReducer);
const middleware = applyMiddleware(thunk);
const store: any = createStore(pReducer, middleware);
const persistor = persistStore(store);
export { persistor, store };
