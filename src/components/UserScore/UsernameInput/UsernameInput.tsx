import React from 'react';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import CenteredModal from '../../Basics/CenteredModal/CenteredModal';
import styles from './UsernameInput.module.scss';
import {setCurrentUsername} from '../../../actions/actionCreators';

export const UsernameInput = (): JSX.Element => {
    const {handleSubmit, register} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (values) => {
        dispatch(setCurrentUsername(values.username));
    };

    const content = (
        <form className={styles['form-container']} onSubmit={handleSubmit(onSubmit)}>
            <p>Please type in your username:</p>
            <input name="username" defaultValue="" />
            <input type="submit" value="OK" />
        </form>
    );

    return <CenteredModal content={content} />;
};
