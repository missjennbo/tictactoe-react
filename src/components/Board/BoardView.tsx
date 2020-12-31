import {Component} from 'react';
import {Board, CellInfo} from '../../types/types';
import styles from './BoardView.module.scss';
import CellView from '../Cell/CellView';

interface Props {
    boardData: Board;
}

class BoardView extends Component<Props> {
    public render(): JSX.Element {
        return (
            <div>
                {this.props.boardData.map((row: CellInfo[]) => {
                    return (
                        <div key={this.props.boardData.indexOf(row)} className={styles['row']}>
                            <CellView key={`${this.props.boardData.indexOf(row)}0`} cellInfo={row[0]} />
                            <CellView key={`${this.props.boardData.indexOf(row)}1`} cellInfo={row[1]} />
                            <CellView key={`${this.props.boardData.indexOf(row)}2`} cellInfo={row[2]} />
                        </div>
                    );
                })}
            </div>
        );
    }
}
export default BoardView;
