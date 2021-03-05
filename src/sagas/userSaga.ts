import {ForkEffect, PutEffect, takeEvery, put} from 'redux-saga/effects';
import {User} from '../types/types';
import {LOAD_USER, SAVE_USER} from '../actions/userActions';

function* loadUser(action): Iterator<PutEffect> {
    const userData: User[] = [
        {id: '12345', username: 'jegom', score: 1},
        {id: '54321', username: 'maluc', score: 5},
    ];
    yield put({type: SAVE_USER, userData});
}

function* userSaga(): Iterator<ForkEffect> {
    yield takeEvery(LOAD_USER, loadUser);
}

export {userSaga};
