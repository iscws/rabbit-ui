import React, { useCallback, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Modal from '..';
import { ModalFuncProps } from '../modal';

function useModal(props: ModalFuncProps): [open: () => void] {
    const showModal = useCallback(() => {
        const CONTANINER_ID = 'rabbit-useModal-container';
        let container = document.getElementById(CONTANINER_ID);

        // 创建一个容器，添加到 body 上
        if (!container) {
            container = document.createElement('div');
            container.setAttribute('id', CONTANINER_ID);
            document.body.appendChild(container);
        }
        const containerRoot = createRoot(container as HTMLDivElement);

        const closeModal = () => {
            containerRoot.unmount();
        };

        containerRoot.render(
            <Modal open={true} title={props.title} afterClose={closeModal} node={container} outside={false}>
                {props.content}
            </Modal>
        );
    }, [props]);

    return [showModal];
}

export default useModal;
