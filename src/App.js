import GameView from './components/Game/GameView';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import {appReducer} from './reducer';
import createSagaMiddleware from 'redux-saga';
import * as sagas from './sagas';

const App = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(appReducer, applyMiddleware(sagaMiddleware, logger));
    Object.keys(sagas).forEach((saga) => {
        sagaMiddleware.run(sagas[saga]);
    });
    return (
        <Provider store={store}>
            <GameView />
        </Provider>
    );
};

export default App;
