import {Action} from 'redux';
import {User} from '../types/types';
import {SET_CURRENT_USERNAME} from './userActions';

export interface UserAction extends Action {
    userList?: User[];
    username?: string;
}

export const setCurrentUsername = (username: string): UserAction => ({type: SET_CURRENT_USERNAME, username});
