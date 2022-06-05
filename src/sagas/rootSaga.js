import {chatSaga} from "./chatSaga"
import {firebaseAuthSagaWatcher} from "./firebaseAuthSagaWatcher";
import {quizManagerUserSaga} from "./quizManagerUserSaga";
import {localStorageManagerSaga} from "./localStorageManagerSaga";
import {all} from "redux-saga/effects"



export function* rootSaga() {
    yield all([chatSaga(), quizManagerUserSaga(), localStorageManagerSaga(), firebaseAuthSagaWatcher])
}