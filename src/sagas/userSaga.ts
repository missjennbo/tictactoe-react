import {ForkEffect, PutEffect, CallEffect, takeEvery, put, call} from 'redux-saga/effects';
import {User} from '../types/types';
import {INCREASE_SCORE, LOAD_USER} from '../actions/userActions';
import {Action} from 'redux';
import {saveUser, setCurrentUsername} from '../actions/actionCreators';

function* loadUser(): Iterator<PutEffect> {
    const userData: User[] = [
        {id: '12345', username: 'jegom', score: 1},
        {id: '54321', username: 'maluc', score: 5},
    ];
    yield put(saveUser(userData));
}

interface UserAction extends Action {
    username: string;
}

function* increaseScore(action: UserAction): Iterator<PutEffect | CallEffect> {
    const username = action.username;
    // increase score for user
    // const response = yield call(() => {});
    // set current user in userState

    yield put(setCurrentUsername(username));

    // reload user data
    // const userData = yield call(() => {});
    yield call(loadUser);
}

function* userSaga(): Iterator<ForkEffect> {
    yield takeEvery(LOAD_USER, loadUser);
    yield takeEvery(INCREASE_SCORE, increaseScore);
}

export {userSaga};
