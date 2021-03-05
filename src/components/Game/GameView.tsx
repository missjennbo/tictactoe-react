import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './GameView.module.scss';
import { RESET_GAME } from '../../actions/boardActions';
import BoardView from '../Board/BoardView';
import ScoreListView from '../ScoreList/ScoreListView';
import Button from '../Basics/Button/Button';
import { LOAD_USER } from '../../actions/userActions';

const GameView = (): JSX.Element => {
    const dispatch = useDispatch();
    const boardData = useSelector((state) => state.game.boardData);
    const currentPlayer = useSelector((state) => state.game.currentPlayer);
    const gameFinished = useSelector((state) => state.game.gameFinished);
    const user = useSelector((state) => state.user.userData);

    useEffect(() => dispatch({type: LOAD_USER}), [gameFinished]);

    const resetGame = () => dispatch({type: RESET_GAME});

    return (
        <div className={styles['container']}>
            <p className={styles['header-text']}>Tic Tac Toe</p>
            <p className={styles['header-text']}>{currentPlayer} ist dran!</p>
            <BoardView boardData={boardData} />
            <ScoreListView isVisible={gameFinished} user={user} onClose={resetGame} />
            <Button text={'Reset'} onClickHandler={resetGame} />
        </div>
    );
};

export default GameView;
