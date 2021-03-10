import GameView from './components/Game/GameView';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import {reducer} from './reducer';
import {ApolloProvider} from "@apollo/client";
import {apolloClient} from "./utils/apolloClient";

const App = () => {
    const store = createStore(reducer, applyMiddleware(logger));
    return (
        <ApolloProvider client={apolloClient}>
            <Provider store={store}>
                <GameView />
            </Provider>
        </ApolloProvider>
    );
};

export default App;
