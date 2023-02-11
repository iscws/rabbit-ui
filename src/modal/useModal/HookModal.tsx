import React, { FC, useEffect, useState } from 'react';
import Modal, { ModalProps } from '../modal';

const HookModal: FC<ModalProps> = ({
    open = false,
    title,
    children,
    afterClose = () => {
        return;
    },
}) => {
    const [vis, setVis] = useState(open);
    useEffect(() => {
        setTimeout(() => {
            setVis(true);
        }, 300);
    }, []);
    return (
        <Modal open={vis} title={title} outside={false} afterClose={afterClose}>
            {children}
        </Modal>
    );
};

export default HookModal;
