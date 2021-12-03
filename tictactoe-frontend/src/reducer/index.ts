import {combineReducers} from 'redux';
import user, {UserState} from './userReducer';
import game, {GameState} from './gameReducer';

export interface State {
    user: UserState;
    game: GameState;
}
export const reducer = combineReducers({
    user,
    game,
});
