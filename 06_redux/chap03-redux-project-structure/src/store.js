import {applyMiddleware, legacy_createStore as createStore} from "redux";
import rootReducer from "./modules";
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(  // legacy_createStore as createStore. 이전 버전 사용
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk, ReduxLogger))
);


export default store;