import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './GameView.module.scss';
import {RESET_GAME} from '../../actions/boardActions';
import BoardView from '../Board/BoardView';

const GameView = (): JSX.Element => {
    const dispatch = useDispatch();
    const boardData = useSelector((state) => state.boardData);
    const currentPlayer = useSelector((state) => state.currentPlayer);
    const gameFinished = useSelector((state) => state.gameFinished);

    return (
        <div className={styles['container']}>
            <p className={styles['header-text']}>Tic Tac Toe</p>
            <p className={styles['header-text']}>{currentPlayer} ist dran!</p>
            <BoardView boardData={boardData} />
            {gameFinished && <p className={styles['header-text']}>Gewonnen!</p>}
            <button className={styles['reset-button']} onClick={() => dispatch({type: RESET_GAME})}>
                Reset
            </button>
        </div>
    );
};

export default GameView;
