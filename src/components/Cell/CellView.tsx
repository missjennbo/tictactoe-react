import {CellInfo, Marker} from '../../types/types';
import {SET_MARKER} from '../../actions/boardActions';
import {useDispatch} from 'react-redux';
import styles from './CellView.module.scss';
import heartImage from '../../images/heart.png';
import crossImage from '../../images/cross.png';

interface Props {
    cellInfo: CellInfo;
}

const cellSize = 200;

const heart = (
    <div className={styles['image-border']} style={{height: cellSize + 10, width: cellSize + 10}}>
        <img style={{height: cellSize, width: cellSize}} src={heartImage} alt="heartImage" />
    </div>
);

const cross = (
    <div className={styles['image-border']} style={{height: cellSize + 10, width: cellSize + 10}}>
        <img style={{height: cellSize, width: cellSize}} src={crossImage} alt="crossImage" />
    </div>
);

const notFilled = <div className={styles['image-border']} style={{height: cellSize + 10, width: cellSize + 10}} />;

const CellView = (props: Props) => {
    const dispatch = useDispatch();

    const setMarker = () => {
        if (props.cellInfo.filledWith === Marker.unmarked) {
            dispatch({
                type: SET_MARKER,
                row: props.cellInfo.row,
                cell: props.cellInfo.column,
            });
        }
    };

    const getMarker = (filledWith: Marker): JSX.Element => {
        if (filledWith === Marker.heart) {
            return heart;
        }
        if (filledWith === Marker.cross) {
            return cross;
        }
        return notFilled;
    };

    return <div onClick={setMarker}>{getMarker(props.cellInfo.filledWith)}</div>;
};

export default CellView;
