import React, { useCallback, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Modal from '..';
import { ModalFuncProps } from '../modal';
import toCreateRoot from '../../_utils/toCreateRoot';

function useModal(props: ModalFuncProps): [open: () => void] {
    const showModal = useCallback(() => {
        const CONTANINER_ID = 'rabbit-useModal-container';
        // let container = toCreateRoot(CONTANINER_ID)
        const containerRoot = toCreateRoot(CONTANINER_ID);

        const closeModal = () => {
            containerRoot.unmount();
        };

        containerRoot.render(
            <Modal open={true} title={props.title} afterClose={closeModal} >
                {props.content}
            </Modal>
        );
    }, [props]);

    return [showModal];
}

export default useModal;
