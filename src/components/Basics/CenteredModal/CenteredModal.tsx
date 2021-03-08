import React from 'react';
import styles from './CenteredModal.module.scss';
import Modal from 'react-modal';

Modal.setAppElement('body');

const CenteredModal = (props: {content: JSX.Element}): JSX.Element => {
    return (
        <div>
            <Modal isOpen={true} className={styles['modal-container']}>
                {props.content}
            </Modal>
        </div>
    );
};

export default CenteredModal;
