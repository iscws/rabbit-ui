import React, { useImperativeHandle, useState } from 'react';
import Modal from '..';
import { ModalFuncProps, ModalProps } from '../modal';

export interface HookModalRef {
    destroy: () => void;
    update: (props: ModalFuncProps) => void;
}

const HookModal: React.ForwardRefRenderFunction<HookModalRef, ModalProps> = (props, ref) => {
    const [info, setInfo] = useState({
        title: props.title,
        content: props.children,
    });
    const [open, setOpen] = useState(props.open);

    // 向父组件暴露子组件的方法
    useImperativeHandle(ref, () => ({
        update: (props: ModalFuncProps) => {
            setInfo({ ...info, ...props });
        },
        destroy: () => {
            setOpen(false);
        },
    }));
    return (
        <Modal {...props} open={open} title={info.title} outside={false} >
            {info.content}
        </Modal>
    );
};

export default React.forwardRef(HookModal);
