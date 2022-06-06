import {rootSaga} from '../sagas/rootSaga'
import {createStore, applyMiddleware, combineReducers} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import createSagaMiddleware from 'redux-saga';
import {chatReducer} from "./chatReducer";
import {userReducer} from "./userReducer";
import {quizReducer} from "./quizReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    chatReducer, userReducer, quizReducer,
});
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);