import {UserScore} from './UserScore';
import {renderWithRedux} from '../../utils/testUtils';
import SagaTester from 'redux-saga-tester';
import userReducer from '../../reducer/userReducer';
import gameReducer from '../../reducer/gameReducer';
import {waitFor} from '@testing-library/react';

describe('UserScore', () => {
    let userScoreComponent;

    const initTest = (initialState): void => {
        const sagaTester = new SagaTester({initialState, reducers: {user: userReducer, game: gameReducer}});
        userScoreComponent = renderWithRedux(<UserScore />, {store: sagaTester.store});
    };

    it('should display input field if username is undefined', async () => {
        initTest({game: {gameFinished: true}, user: {username: null}});
        await waitFor(() => {
            userScoreComponent.getByText('Please type in your username:');
        });
    });

    it('should display user score list if game is finished and username is set', async () => {
        initTest({game: {gameFinished: true}, user: {username: 'username'}});
        await waitFor(() => {
            userScoreComponent.getByText('Gewonnen!');
        });
    });
});
