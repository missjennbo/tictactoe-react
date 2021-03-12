import {combineReducers} from 'redux';
import user from './userReducer';
import game from './gameReducer';

export const reducer = combineReducers({
    user,
    game,
});
