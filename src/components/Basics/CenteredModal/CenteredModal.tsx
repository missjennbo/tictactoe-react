import React from 'react';
import styles from '../../ScoreList/ScoreListView.module.scss';
import Modal from 'react-modal';

Modal.setAppElement('body');

const CenteredModal = (props: {isOpen: boolean, content: JSX.Element}): JSX.Element => {
    return (
        <div>
            <Modal isOpen={props.isOpen} className={styles['modal-container']}>
                {props.content}
            </Modal>
        </div>
    );
};

export default CenteredModal;
