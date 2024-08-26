import {applyMiddleware,legacy_createStore,combineReducers} from 'redux'
import { thunk } from 'redux-thunk';
import { authReducer } from './State/Authentication/Reducer';
import { productReducer } from './State/Products/Reducer';
import { adminOrderReducer } from './State/Orders/Reducer';


const rootReducers = combineReducers({
   auth:authReducer,
   products:productReducer,
   adminOrder:adminOrderReducer,
})


export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));