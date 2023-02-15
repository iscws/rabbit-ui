import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Dialog from './dialog';
import './style/index.less';

/**
 * Modal Modal组件
 * @param {destroyOnClose} bool 关闭时销毁Modal里的子元素
 * @param {mask} bool 是否展示遮罩
 * @param {title} ReactNode 标题内容
 * @param {open} bool Modal是否可见
 * @param {width} string Modal宽度
 * @param {onCancel} func 点击遮罩或者取消按钮，或者键盘esc按键时的回调
 * @param {onOk} func 点击确定的回调
 * @param {keyboard} bool 键盘esc关闭弹窗
 * @param {footer} ReactNode 底部内容
 * @param {closable} boolean 是否展示右上角的关闭按钮
 * @param {center} boolean 是否将对话框居中处理
 * @param {afterClose} func 在对话框完全关闭之后执行的函数
 *@param {useModal} boolean 内部变量：用于useModal的判断
 *@param {wrapClassName} string 对话框外层容器的类名
 *@param {wrapId} string 对话框外层容器的id


 *
 */

export interface ModalProps {
  children: React.ReactNode;
  title?: React.ReactNode;
  onCancel?: (...rest: any[]) => void;
  open: boolean;
  onOk?: (...rest: any[]) => void;
  width?: number;
  destroyOnClose?: boolean;
  mask?: boolean;
  keyboard?: boolean;
  footer?: React.ReactNode;
  closable?: boolean;
  center?: boolean;
  style?: React.CSSProperties;
  afterClose?: (...rest: any) => void;
  type?: "simple" | "default";
  wrapClassName?: string;
  wrapId?: string;
  _useModal?: boolean;
  _useModalClick?: boolean;
}



interface openProps {
  isOpen: boolean;
  time: number;
}

const Modal: React.FC<ModalProps> = (props) => {
  // 该变量保证是用户第一次
  const openModal = useRef<openProps>({ isOpen: false, time: 0 });
  // 除了第一次启动生成以外其他时候直接隐藏
  if (openModal.current.time === 0 && props.open === true) {
    props._useModal
      ? (openModal.current = { isOpen: true, time: 0 })
      : (openModal.current = { isOpen: true, time: 1 });
  }
  const [visible, setVisible] = useState(props.open);
  useEffect(() => {
    // 遮罩层的淡入淡出
    if (props.open) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [props.open]);

  const handleClose = useCallback(() => {
    if (props.onCancel) props.onCancel();
    else {
      setVisible(false);
    }
  }, [props.onCancel, visible]);

  const handleOk = useCallback(() => {
    if (props.onOk) props.onOk();
    else {
      setVisible(false);
    }
  }, [props.onOk, visible]);

  const modal = openModal.current.isOpen && (
    <Dialog {...props} open={visible} onCancel={handleClose} onOk={handleOk}>
      {props.children}
    </Dialog>
  );

  return createPortal(modal, document.body);
};

export default Modal;
