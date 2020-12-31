import {CellInfo, Marker} from '../../types/types';
import {SET_MARKER} from '../../actions/boardActions';
import {useDispatch} from 'react-redux';
import {crossCell, heartCell, notFilledCell} from './CellData';

interface Props {
    cellInfo: CellInfo;
}

const CellView = (props: Props) => {
    const dispatch = useDispatch();
    const setMarker = () =>
        dispatch({
            type: SET_MARKER,
            row: props.cellInfo.row,
            cell: props.cellInfo.column,
        });

    const cellIsUnmarked = props.cellInfo.filledWith === Marker.unmarked;

    const getMarker = (filledWith: Marker): JSX.Element => {
        if (filledWith === Marker.heart) {
            return heartCell;
        }
        if (filledWith === Marker.cross) {
            return crossCell;
        }
        return notFilledCell;
    };

    return (
        <div onClick={() => (cellIsUnmarked ? setMarker() : '')}>{getMarker(props.cellInfo.filledWith)}</div>
    );
};

export default CellView;
