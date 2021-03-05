import React from 'react';
import styles from './ScoreListView.module.scss';
import Modal from 'react-modal';
import Button from '../Button/Button';
import {Table} from '../Table/Table';
import {User} from '../../types/types';
import {sortWith, descend, prop} from 'ramda';

Modal.setAppElement('body');

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

    return (
        <div>
            <Modal isOpen={props.isVisible} className={styles['modal-container']}>
                <p className={styles['header-text']}>Gewonnen!</p>
                <Table columns={columns} data={sortByScore(props.user)} />
                <div style={{alignSelf: 'center'}}>
                    <Button text={'Close'} onClickHandler={props.onClose} />
                </div>
            </Modal>
        </div>
    );
};

export default ScoreListView;
