import {Action} from 'redux';
import {User} from '../types/types';
import {INCREASE_SCORE, LOAD_USER, SAVE_USER, SET_CURRENT_USERNAME} from './userActions';

export interface UserAction extends Action {
    userList?: User[];
    username?: string;
}

export const loadUser = (): Action => ({
    type: LOAD_USER,
});

export const saveUser = (userList): UserAction => ({type: SAVE_USER, userList});

export const setCurrentUsername = (username: string): UserAction => ({type: SET_CURRENT_USERNAME, username});

export const increaseUserScore = (username: string): UserAction => ({type: INCREASE_SCORE, username});
