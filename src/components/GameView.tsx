import React from 'react';
import styles from './GameView.module.scss';

const GameView = (): JSX.Element => (
    <div className={styles['container']}>
        <p className={styles['header-text']}>Tic Tac Toe</p>
        <p className={styles['header-text']}>XY ist dran!</p>
    </div>
);

export default GameView;
