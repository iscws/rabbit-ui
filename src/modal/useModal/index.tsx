import React, { createRef, useCallback } from 'react';
import toCreateRoot from '../../_utils/toCreateRoot';
import { ModalFuncProps } from '../modal';
import HookModal, { HookModalRef } from './HookModal';


type UseModalProps = [
    fns: {
        init: (props: ModalFuncProps) => {
            update: (props: ModalFuncProps) => void;
            destroy: () => void;
        };
    },
];

function useModal(): UseModalProps {
    const CONTANINER_ID = 'rabbit-useModal-container';

    const withInit = (initProps: ModalFuncProps) => {
        // 创建ref，让父组件调用子组件的方法，对modal进行内容的监控
        const shareRef = createRef<HookModalRef>();
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
    return [fns];
}

export default useModal;
