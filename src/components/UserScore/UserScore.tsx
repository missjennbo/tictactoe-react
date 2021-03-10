import {UsernameInput} from './UsernameInput/UsernameInput';
import ScoreListView from './ScoreList/ScoreListView';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RESET_GAME} from '../../actions/boardActions';
import { useMutation, useQuery } from '@apollo/client';
import { INCREASE_SCORE, USER_QUERY } from '../../utils/apolloClient';
import { setCurrentUsername } from '../../actions/actionCreators';

export const UserScore = (): JSX.Element => {
    const {loading, error, data} = useQuery(USER_QUERY);
    const dispatch = useDispatch();
    const currentUsername = useSelector((state) => state.user.username);
    const resetGame = () => dispatch({type: RESET_GAME});
    const user = data ? data.users : [];

    return <div>{currentUsername ? <ScoreListView user={user} onClose={resetGame} /> : <UsernameInput />}</div>;
};
