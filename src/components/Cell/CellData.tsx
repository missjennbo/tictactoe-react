import styles from './CellView.module.scss';
import heartImage from '../../images/heart.png';
import crossImage from '../../images/cross.png';

const cellSize = 200;

export const heartCell = (
    <div className={styles['image-border']} style={{height: cellSize + 10, width: cellSize + 10}}>
        <img style={{height: cellSize, width: cellSize}} src={heartImage} alt="heartImage" />
    </div>
);

export const crossCell = (
    <div className={styles['image-border']} style={{height: cellSize + 10, width: cellSize + 10}}>
        <img style={{height: cellSize, width: cellSize}} src={crossImage} alt="crossImage" />
    </div>
);

export const notFilledCell = <div className={styles['image-border']} style={{height: cellSize + 10, width: cellSize + 10}} />;