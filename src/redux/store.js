import { createStore } from 'redux';
import rootReducer from "./reducers";
export default createStore(
    rootReducer,
    //便于chrome Redux devTools调试
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);