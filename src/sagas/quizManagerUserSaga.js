import {put, call, takeEvery} from "redux-saga/effects"
import {logErrorAction, LOGIN, loginSuccessAction, LOGOUT, logoutSuccessAction} from "../store/userReducer";
import {auth, provider} from "../firebase/firebase";
import {signInWithPopup, signOut} from "firebase/auth";

function* userLogIn(action){
    try{
        const {user} = yield call(signInWithPopup, auth, provider);
        yield put(loginSuccessAction(user));
        yield call ([localStorage, 'setItem'], 'user', JSON.stringify(user));
        const navigate = action.payload;
        yield call(navigate,"/");
    }
    catch (error){
        yield put(logErrorAction(error.message));
    }

}

function* userLogOut(action){
    try {

        yield call(signOut, auth);
        yield put(logoutSuccessAction());
        yield call ([localStorage, 'removeItem'], "user");

        const navigate = action.payload;
        yield call(navigate,"/login");
    }
    catch (error){
        yield put(logErrorAction(error.message));
    }

}

export function* quizManagerUserSaga() {
    yield takeEvery(LOGIN, userLogIn);
    yield takeEvery(LOGOUT, userLogOut);
}