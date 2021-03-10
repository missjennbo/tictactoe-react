import {combineReducers} from 'redux';
import user from './userRedcuer';
import game from './gameReducer';

export const reducer = combineReducers({
    user,
    game,
});
