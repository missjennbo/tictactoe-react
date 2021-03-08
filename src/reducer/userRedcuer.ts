import {User} from '../types/types';
import {SAVE_USER, SET_CURRENT_USERNAME} from '../actions/userActions';
import {UserAction} from '../actions/actionCreators';

const INITIAL_STATE: UserState = {
    userList: [],
    username: null,
};

interface UserState {
    userList: User[];
    username: string;
}

const userRedcuer = (state = INITIAL_STATE, action: UserAction) => {
    switch (action.type) {
        case SAVE_USER:
            return {
                ...state,
                userList: action.userList,
            };
        case SET_CURRENT_USERNAME:
            return {
                ...state,
                username: action.username,
            };
        default:
            return state;
    }
};

export default userRedcuer;
