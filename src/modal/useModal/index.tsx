import HookModal from './HookModal';
import React from 'react';
// import HookModal, { HookModalRef } from "./HookModal"

function useModal(): [fn: any, instance: any] {
    const instance = (
        <HookModal
            afterClose={() => {
                return;
            }}
        />
    );

    const fns = () => ({
        info: 'info',
        success: 'info',
        error: 'info',
        warning: 'info',
        confirm: 'info',
    });
    return [fns, instance];
}
// function useModal(
//     props: any,
// ): [open: () => void, close: () => void] {
//     const domRef = useRef<HTMLDivElement | null>(null);

//     const CONTANINER_ID = "rabbit-useModal-container";
//     let container = document.getElementById(CONTANINER_ID);

//     // 创建一个容器，添加到 body 上
//     if (!container) {
//         container = document.createElement("div");
//         container.setAttribute("id", CONTANINER_ID);
//         document.body.appendChild(container);
//     }
//     const containerRoot = createRoot(container as HTMLDivElement);

//     const showModal = useCallback(() => {
//         const modalContainer = <Modal outside={false} open={true}>123</Modal>
//         containerRoot.render(modalContainer);
//     }, [open, props])

//     const closeModal = useCallback(() => {
//         containerRoot.unmount();
//     }, [props])

//     return [showModal, closeModal]
// }

export default useModal;
