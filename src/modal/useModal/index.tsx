import React, { createRef, useCallback } from 'react';
import toCreateRoot from '../../_utils/toCreateRoot';
import HookModal, { HookModalRef } from './HookModal';

export interface ModalFuncProps {
    title?: React.ReactNode;
    content?: React.ReactNode;
}

type UseModalProps = [
    showModalSimple: () => void,
    fns: {
        init: (props: ModalFuncProps) => {
            update: (props: ModalFuncProps) => void;
            destroy: () => void;
        };
    },
];

function useModal(props: ModalFuncProps): UseModalProps {
    const CONTANINER_ID = 'rabbit-useModal-container';

    const showModalSimple = useCallback(() => {
        // let container = toCreateRoot(CONTANINER_ID)
        const containerRoot = toCreateRoot(CONTANINER_ID);

        const closeModal = () => {
            containerRoot.unmount();
        };

        containerRoot.render(
            <HookModal open={true} title={props.title} afterClose={closeModal} type="simple">
                {props.content}
            </HookModal>,
        );
    }, [props]);

    const withInit = (initProps: ModalFuncProps) => {
        // 创建ref，让父组件调用子组件的方法，对modal进行内容的监控
        const shareRef = createRef<HookModalRef>();

        const CONTANINER_ID = 'rabbit-useModal-container';
        const containerRoot = toCreateRoot(CONTANINER_ID);

        // 关闭对话框函数
        const closeModal = () => {
            containerRoot.unmount();
        };
        // 更新函数
        const withUpdate = (props: any) => {
            shareRef.current?.update(props);
        };

        // 销毁对话框
        const withDestroy = () => {
            shareRef.current?.destroy();
        };

        containerRoot.render(
            <HookModal open={true} title={initProps.title} afterClose={closeModal} ref={shareRef}>
                {initProps.content}
            </HookModal>,
        );
        return {
            update: withUpdate,
            destroy: withDestroy,
        };
    };

    const fns = React.useMemo(
        () => ({
            init: withInit,
        }),
        [],
    );
    return [showModalSimple, fns];
}

export default useModal;
