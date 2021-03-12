import {SET_CURRENT_USERNAME} from '../actions/userActions';
import {UserAction} from '../actions/actionCreators';

const INITIAL_STATE: UserState = {
    username: null,
};

interface UserState {
    username: string;
}

const userReducer = (state = INITIAL_STATE, action: UserAction) => {
    switch (action.type) {
        case SET_CURRENT_USERNAME:
            return {
                ...state,
                username: action.username,
            };
        default:
            return state;
    }
};

export default userReducer;
