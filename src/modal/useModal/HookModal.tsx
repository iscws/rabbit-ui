import React, { forwardRef, useState, ForwardRefRenderFunction } from "react"
import Modal, { ModalFuncProps } from "../modal"


export interface HookModalProps {
    afterClose: () => void;
    // config: ModalFuncProps;
}

export interface HookModalRef {
    destroy: () => void;
    update: (config: ModalFuncProps) => void;
}

// 获取两个参数，一个是绑定的ref，一个是传递过来的参数
const HookModal: ForwardRefRenderFunction<HookModalRef, HookModalProps> = ({
    afterClose
}, ref) => {
    const [open, setOpen] = useState(false);

    return (
        <Modal open={open} >
            123
        </Modal>
    )
}

export default forwardRef(HookModal);
