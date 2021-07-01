import {createStore} from 'react';
import { rootReducers } from "./reducers";

export default createStore(rootReducers, initialState, applyMiddleware(thunk))



 