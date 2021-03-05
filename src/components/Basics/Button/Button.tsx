import React from 'react';
import styles from './Button.module.scss';

interface Props {
    text: string;
    onClickHandler: () => void;
}
const Button = (props: Props): JSX.Element => {
    return (
        <button className={styles['button-style']} onClick={props.onClickHandler}>
            {props.text}
        </button>
    );
};

export default Button;
