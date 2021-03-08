import { Action } from 'redux';
import { RESET_GAME, SET_MARKER } from '../actions/boardActions';
import { Board, Marker, Player } from '../types/types';
import { clone } from 'ramda';
import { getMarkerFor, getNextPlayer, isGameFinished, isUnmarked } from '../utils/gameUtils';

export const INITIAL_STATE: GameState = {
    gameFinished: false,
    currentPlayer: Player.heart,
    boardData: [
        [
            {filledWith: Marker.unmarked, row: 0, column: 0},
            {filledWith: Marker.unmarked, row: 0, column: 1},
            {filledWith: Marker.unmarked, row: 0, column: 2},
        ],
        [
            {filledWith: Marker.unmarked, row: 1, column: 0},
            {filledWith: Marker.unmarked, row: 1, column: 1},
            {filledWith: Marker.unmarked, row: 1, column: 2},
        ],
        [
            {filledWith: Marker.unmarked, row: 2, column: 0},
            {filledWith: Marker.unmarked, row: 2, column: 1},
            {filledWith: Marker.unmarked, row: 2, column: 2},
        ],
    ],
};

export interface GameState {
    currentPlayer: Player;
    boardData: Board;
    gameFinished: boolean;
}

export interface GameAction extends Action {
    row?: number;
    cell?: number;
}

const updateGame = (currentState: GameState, clickedCell: GameAction): GameState => {
    if (currentState.gameFinished) {
        return currentState;
    }
    const cell = currentState.boardData[clickedCell.row][clickedCell.cell];
    if (isUnmarked(cell)) {
        currentState.boardData[clickedCell.row][clickedCell.cell].filledWith = getMarkerFor(currentState.currentPlayer);
    }
    currentState.gameFinished = isGameFinished(currentState.boardData, currentState.currentPlayer);
    currentState.currentPlayer = getNextPlayer(currentState.currentPlayer);
    return currentState;
};

const gameReducer = (state = INITIAL_STATE, action: GameAction) => {
    const currentState = clone(state);
    switch (action.type) {
        case SET_MARKER:
            return {
                ...updateGame(currentState, action),
            };
        case RESET_GAME:
            return {
                ...INITIAL_STATE,
            };
        default:
            return state;
    }
};

export default gameReducer;