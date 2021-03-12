import {render, RenderResult} from '@testing-library/react';
import {Store} from 'redux';
import {Provider} from 'react-redux';
import {INCREASE_SCORE, USER_QUERY} from './apolloClient';
import {MockedProvider} from '@apollo/client/testing';
import {User} from '../types/types';

const testUser: User = {
    id: '12345678',
    score: 1,
    username: 'username',
};

const mocks = [
    {
        request: {
            query: USER_QUERY,
            variables: {},
        },
        result: {
            data: {
                users: [testUser],
            },
            loading: false,
            error: null,
        },
    },
    {
        request: {
            query: INCREASE_SCORE,
            variables: {username: 'username'},
        },
        result: {
            data: {},
        },
    },
];

export const renderWithRedux = (ui, {store = undefined} = {}): RenderResult & {store: Store} => ({
    ...render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Provider store={store}>{ui}</Provider>
        </MockedProvider>
    ),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    // https://testing-library.com/docs/example-react-redux
    store,
});
