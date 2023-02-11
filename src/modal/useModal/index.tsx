import React, { useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { ModalFuncProps } from '../modal';
import HookModal from './HookModal';

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

        const modalContainer = (
            <HookModal open={false} title={props.title} afterClose={closeModal}>
                {props.content}
            </HookModal>
        );
        containerRoot.render(modalContainer);
    }, [open]);

    return [showModal];
}

export default useModal;
