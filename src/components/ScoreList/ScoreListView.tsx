import React from 'react';
import styles from './ScoreListView.module.scss';
import Button from '../Basics/Button/Button';
import { Table } from '../Basics/Table/Table';
import { User } from '../../types/types';
import { descend, prop, sortWith } from 'ramda';
import CenteredModal from '../Basics/CenteredModal/CenteredModal';

const ScoreListView = (props: {isVisible: boolean; user: User[]; onClose: () => void}): JSX.Element => {
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

    const sortByScore = sortWith([
        descend(prop('score'))
    ]);

    let content = <><p className={styles['header-text']}>Gewonnen!</p>
        <Table columns={columns} data={sortByScore(props.user)}/>
        <div style={{alignSelf: 'center'}}>
            <Button text={'Close'} onClickHandler={props.onClose}/>
        </div>
    </>;

    return (
        <div>
            <CenteredModal isOpen={props.isVisible} content={content}/>
        </div>
    );
};

export default ScoreListView;
