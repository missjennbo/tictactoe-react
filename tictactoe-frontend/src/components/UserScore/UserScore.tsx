import {UsernameInput} from './UsernameInput/UsernameInput';
import ScoreListView from './ScoreList/ScoreListView';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useMutation, useQuery} from '@apollo/client';
import {INCREASE_SCORE, USER_QUERY} from '../../utils/apolloClient';
import {State} from '../../reducer';

export const UserScore = (): JSX.Element => {
    const {loading, error, data} = useQuery(USER_QUERY);
    const [increaseScore] = useMutation(INCREASE_SCORE, {refetchQueries: [{query: USER_QUERY}]});
    const gameFinished = useSelector((state: State) => state.game.gameFinished);
    const currentUsername = useSelector((state: State) => state.user.username);
    const user = data ? data.users : [];

    useEffect(() => {
        if (gameFinished && currentUsername) {
            increaseScore({variables: {username: currentUsername}})
                .then(() => {})
                .catch((error) => console.log(`Error increasing score for user ${currentUsername}: ${error}`));
        }
    }, [gameFinished, currentUsername, increaseScore]);

    if (loading || error) return <div />;
    return <div>{currentUsername ? <ScoreListView user={user} /> : <UsernameInput />}</div>;
};
