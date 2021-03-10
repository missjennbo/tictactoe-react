import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './GameView.module.scss';
import {RESET_GAME} from '../../actions/boardActions';
import BoardView from '../Board/BoardView';
import Button from '../Basics/Button/Button';
import {UserScore} from '../UserScore/UserScore';

const GameView = (): JSX.Element => {
    const dispatch = useDispatch();
    const boardData = useSelector((state) => state.game.boardData);
    const currentPlayer = useSelector((state) => state.game.currentPlayer);
    const gameFinished = useSelector((state) => state.game.gameFinished);

    const resetGame = () => dispatch({type: RESET_GAME});

    return (
        <div className={styles['container']}>
            <p className={styles['header-text']}>Tic Tac Toe</p>
            <p className={styles['header-text']}>{currentPlayer} ist dran!</p>
            <BoardView boardData={boardData} />

            {gameFinished && <UserScore />}

            <Button text={'Reset'} onClickHandler={resetGame} />
        </div>
    );
};

export default GameView;
