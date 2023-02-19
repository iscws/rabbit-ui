import React, { useCallback } from 'react'
import Modal from '.';
import toCreateRoot from '../_utils/toCreateRoot'
import { ModalFuncProps } from './modal'


export default function confirm(props: ModalFuncProps) {

    const showModal = () => {
        const containerRoot = toCreateRoot("rabbit-modal-confirm");

        const closeModal = () => {
            containerRoot.unmount();
        };

        containerRoot.render(
            <Modal {...props} open={true} afterClose={closeModal} outside={false}>
                {props.content}
            </Modal>,
        );
    }
    return showModal;
}
