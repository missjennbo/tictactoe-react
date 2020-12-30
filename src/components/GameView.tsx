import React from 'react';
import {connect} from 'react-redux';
import styles from './GameView.module.scss';
import {RESET_GAME} from '../actions/boardActions';
import {GameState} from '../reducer/gameReducer';
import {Board, Player} from '../types/types';
import BoardView from './BoardView';

interface DispatchProps {
    resetGame: () => void;
}

interface Props {
    boardData: Board;
    currentPlayer: Player;
    gameFinished: boolean;
}

const GameView = (props: Props & DispatchProps): JSX.Element => (
    <div className={styles['container']}>
        <p className={styles['header-text']}>Tic Tac Toe</p>
        <p className={styles['header-text']}>{props.currentPlayer} ist dran!</p>
        <BoardView boardData={props.boardData} />
        {props.gameFinished && <p className={styles['header-text']}>Gewonnen!</p>}
        <button className={styles['reset-button']} onClick={props.resetGame}>
            Reset
        </button>
    </div>
);

const mapDispatchToProps = (dispatch): DispatchProps => ({
    resetGame: () => dispatch({type: RESET_GAME}),
});

const mapStateToProps = (state: GameState): Props => {
    return {
        boardData: state.boardData,
        currentPlayer: state.currentPlayer,
        gameFinished: state.gameFinished,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameView);
