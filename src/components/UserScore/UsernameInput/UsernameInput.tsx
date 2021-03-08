import React from 'react';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import CenteredModal from '../../Basics/CenteredModal/CenteredModal';
import styles from './UsernameInput.module.scss';
import {increaseUserScore} from '../../../actions/actionCreators';

export const UsernameInput = (): JSX.Element => {
    const dispatch = useDispatch();
    const {handleSubmit, register} = useForm();

    const onSubmit = (values) => {
        const username = values.username;
        return dispatch(increaseUserScore(username));
    };

    const content = (
        <form className={styles['form-container']} onSubmit={handleSubmit(onSubmit)}>
            Please type in your username:
            <input name="username" ref={register} defaultValue="" />
            <input type="submit" value="OK" />
        </form>
    );

    return <CenteredModal content={content} />;
};
