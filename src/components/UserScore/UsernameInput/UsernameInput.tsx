import React from 'react';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import CenteredModal from '../../Basics/CenteredModal/CenteredModal';
import styles from './UsernameInput.module.scss';
import {useMutation} from '@apollo/client';
import {INCREASE_SCORE, USER_QUERY} from '../../../utils/apolloClient';
import {setCurrentUsername} from '../../../actions/actionCreators';

export const UsernameInput = (): JSX.Element => {
    const dispatch = useDispatch();
    const {handleSubmit, register} = useForm();
    const [increaseScore, {data}] = useMutation(INCREASE_SCORE, {refetchQueries: [{query: USER_QUERY}]});

    const onSubmit = (values) => {
        const username = values.username;
        increaseScore({variables: {username}})
            .then((data) => {
                return dispatch(setCurrentUsername(username));
            })
            .catch((e) => console.log(`Error increasing score for user ${username}`));
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
