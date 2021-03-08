import {UsernameInput} from './UsernameInput/UsernameInput';
import ScoreListView from './ScoreList/ScoreListView';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RESET_GAME} from '../../actions/boardActions';

export const UserScore = (): JSX.Element => {
    const user = useSelector((state) => state.user.userList);
    const dispatch = useDispatch();
    const currentUsername = useSelector((state) => state.user.username);
    const resetGame = () => dispatch({type: RESET_GAME});

    return <div>{currentUsername ? <ScoreListView user={user} onClose={resetGame} /> : <UsernameInput />}</div>;
};
