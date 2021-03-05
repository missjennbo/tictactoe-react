import {combineReducers} from 'redux';
import user from './userRedcuer';
import game from './gameReducer';

export const appReducer = combineReducers({
    user,
    game,
});
