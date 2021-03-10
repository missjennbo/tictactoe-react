import React from 'react';
import styles from './ScoreListView.module.scss';
import Button from '../../Basics/Button/Button';
import {Table} from '../../Basics/Table/Table';
import {User} from '../../../types/types';
import {useDispatch} from 'react-redux';
import {descend, prop, sortWith} from 'ramda';
import CenteredModal from '../../Basics/CenteredModal/CenteredModal';
import {RESET_GAME} from '../../../actions/boardActions';

const ScoreListView = (props: {user: User[]}): JSX.Element => {
    const dispatch = useDispatch();
    const columns = [
        {
            Header: 'Username',
            accessor: 'username',
        },
        {
            Header: 'Score',
            accessor: 'score',
        },
    ];

    const sortByScore = sortWith([descend(prop('score'))]);

    const content = (
        <>
            <p className={styles['header-text']}>Gewonnen!</p>
            <Table columns={columns} data={sortByScore(props.user)} />
            <div style={{alignSelf: 'center'}}>
                <Button text={'Close'} onClickHandler={() => dispatch({type: RESET_GAME})} />
            </div>
        </>
    );

    return (
        <div>
            <CenteredModal content={content} />
        </div>
    );
};

export default ScoreListView;
