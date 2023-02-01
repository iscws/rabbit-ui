import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export interface ModalProps {
  // 标题
  title?: React.ReactNode;
  children: React.ReactNode;
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
  width?: number;
}
const prefixCls = 'rabbit-modal';

const Modal: React.FC<ModalProps> = ({ title, width, children, onOk, onCancel, open, ...rest }) => {
  useEffect(() => {
    // 禁止滚动
    document.body.style.overflow = !open ? '' : 'hidden';
  }, [open]);

  const modal = (
    <div
      className={prefixCls}
      style={{
        display: open ? 'flex' : 'none',
      }}
    >
      <div
        className="rabbit-modal-content"
        style={{
          width,
        }}
      >
        <div className="rabbit-modal-close-x" onClick={onCancel}>
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="close"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
          </svg>
        </div>

        <div className="rabbit-modal-header">
          <div className="rabbit-modal-title">{title}</div>
        </div>
        <div className="rabbit-modal-body">{children}</div>

        <div className="rabbit-modal-footer">
          <button className="rabbit-modal-button rabbit-default" onClick={onCancel}>
            取消
          </button>
          <button className="rabbit-modal-button rabbit-primary" onClick={onOk}>
            确定
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
};

export default Modal;
