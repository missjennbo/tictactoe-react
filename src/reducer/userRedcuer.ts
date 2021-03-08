import {User} from '../types/types';
import {Action} from 'redux';
import {SAVE_USER} from '../actions/userActions';

const INITIAL_STATE: UserState = {
    userData: [],
};

interface UserState {
    userData: User[];
}

interface UserAction extends Action {
    userData: User[];
}

const userRedcuer =  (state = INITIAL_STATE, action: UserAction) => {
    switch (action.type) {
        case SAVE_USER:
            return {
                userData: action.userData,
            };
        default:
            return state;
    }
};

export default userRedcuer;