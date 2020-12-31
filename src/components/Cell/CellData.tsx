import styles from './CellView.module.scss';
import heartImage from '../../images/heart.png';
import crossImage from '../../images/cross.png';

export const heartCell = (
    <div className={styles['image-border']}>
        <img className={styles['image']} src={heartImage} alt="heartImage" />
    </div>
);

export const crossCell = (
    <div className={styles['image-border']}>
        <img className={styles['image']} src={crossImage} alt="crossImage" />
    </div>
);

export const notFilledCell = <div className={styles['image-border']} />;
