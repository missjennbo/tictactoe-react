import React from 'react';
import {connect, useDispatch} from 'react-redux';
import styles from './GameView.module.scss';
import {RESET_GAME} from '../../actions/boardActions';
import {GameState} from '../../reducer/gameReducer';
import {Board, Player} from '../../types/types';
import BoardView from '../Board/BoardView';

interface Props {
    boardData: Board;
    currentPlayer: Player;
    gameFinished: boolean;
}

const GameView = (props: Props): JSX.Element => {
    const dispatch = useDispatch();

    return (
        <div className={styles['container']}>
            <p className={styles['header-text']}>Tic Tac Toe</p>
            <p className={styles['header-text']}>{props.currentPlayer} ist dran!</p>
            <BoardView boardData={props.boardData} />
            {props.gameFinished && <p className={styles['header-text']}>Gewonnen!</p>}
            <button className={styles['reset-button']} onClick={() => dispatch({type: RESET_GAME})}>
                Reset
            </button>
        </div>
    );
};

const mapStateToProps = (state: GameState): Props => {
    return {
        boardData: state.boardData,
        currentPlayer: state.currentPlayer,
        gameFinished: state.gameFinished,
    };
};

export default connect(mapStateToProps)(GameView);
