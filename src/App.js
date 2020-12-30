import GameView from './components/GameView';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import reducer from '/reducer/gameReducer';
import logger from 'redux-logger';

const App = () => {
    const store = createStore(reducer, applyMiddleware(logger));
    return (
        <Provider store={store}>
            <GameView />
        </Provider>
    );
};

export default App;
