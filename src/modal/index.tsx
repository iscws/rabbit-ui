import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import toArray from '../_utils/toArray';
import './style';

/**
 * Modal Modal组件
 * @param {destroyOnClose} bool 关闭时销毁Modal里的子元素
 * @param {mask} bool 是否展示遮罩
 * @param {title} ReactNode 标题内容
 * @param {open} bool Modal是否可见
 * @param {width} string Modal宽度
 * @param {toCancel} func 点击遮罩或者取消按钮，或者键盘esc按键时的回调
 * @param {toOk} func 点击确定的回调
 * @param {keyboard} bool 键盘esc关闭弹窗
 * @param {footer} ReactNode 底部内容
 * @param {closable} boolean 是否展示右上角的关闭按钮
 *
 */

export interface ModalProps {
  children: React.ReactNode;
  title?: React.ReactNode;
  toCancel?: (...rest: any[]) => void;
  open: boolean;
  toOk?: (...rest: any[]) => void;
  width?: number;
  destroyOnClose?: boolean;
  mask?: boolean;
  keyboard?: boolean;
  footer?: React.ReactNode;
  closable?: boolean;
}
const prefixCls = 'rabbit-modal';

const Modal: React.FC<ModalProps> = ({
  destroyOnClose = false,
  title,
  width,
  children,
  toOk = () => {
    return;
  },
  toCancel = () => {
    return;
  },
  open = false,
  mask = true,
  keyboard = true,
  footer = "default",
  closable = true,
  ...rest
}) => {
  // 使用该变量用于控制对话框的开启和关闭
  const [visible, setVisible] = useState(open);
  const modalRef = useRef<HTMLDivElement | null>(null);
  // 控制动画的开启和关闭
  const [animateStart, setAnimateStart] = useState(open);
  // 是否销毁弹窗
  const [destroyModal, setDestryoModal] = useState(false);


  // 淡入淡出
  useEffect(() => {
    // 禁止滚动
    document.body.style.overflow = !open ? '' : 'hidden';
    // 遮罩层的淡入淡出
    if (open) {
      setVisible(true);
      // 然后再开始动画
      setAnimateStart(true);
      // 确保每一次打开弹窗子元素不被销毁
      setDestryoModal(false);
    } else {
      setAnimateStart(false);
      setTimeout(() => {
        // 动画结束后把模态框设置为 display: none
        setVisible(false);
        // 动画结束后将子元素销毁，添加visible是保证弹窗关闭的时候才销毁子元素，
        if (destroyOnClose && visible) {
          setDestryoModal(true);
        }
      }, 300);
    }
  }, [open]);

  // 键盘关闭弹窗

  useEffect(() => {
    if (keyboard) {
      const closeModal = function (event: KeyboardEvent) {
        let e = event || window.event;
        if (e && e.key === 'Escape') {
          toCancel();
        }
      };
      document.addEventListener('keydown', closeModal, false);
      return () => {
        document.removeEventListener('keydown', closeModal, false);
      };
    }
  }, []);


  const modal = (

    <div className={prefixCls} style={{ display: visible ? 'flex' : 'none' }} ref={modalRef}>

      {mask && (
        <CSSTransition classNames="rabbit-mask" in={animateStart} timeout={300} >
          <div className="rabbit-modal-mask"></div>
        </CSSTransition>
      )}

      <CSSTransition classNames={'rabbit-modal'} in={animateStart} timeout={300} >
        <div
          className="rabbit-modal-content"
          style={{
            width,
          }}
        >
          {closable && <div className="rabbit-modal-close-x" onClick={toCancel}>
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
          </div>}

          <div className="rabbit-modal-header">
            <div className="rabbit-modal-title">{title}</div>
          </div>
          <div className="rabbit-modal-body">{!destroyModal && children}</div>

          <div className="rabbit-modal-footer">
            {
              // 显示自定义footer
              footer === 'default' ? (
                <>
                  <span className='rabbit-modal-footer-item'>
                    <button className="rabbit-modal-button rabbit-default" onClick={toCancel}>
                      取消
                    </button>
                  </span>

                  <span className='rabbit-modal-footer-item'>
                    <button className="rabbit-modal-button rabbit-primary" onClick={toOk}>
                      确定
                    </button>
                  </span>
                </>
              ) : (
                toArray(footer).map((item, index) => {
                  return <span className='rabbit-modal-footer-item' key={index}>{item}</span>
                })
              )
            }
          </div>
        </div>
      </CSSTransition>
    </div>
  );

  return createPortal(modal, document.body);
};

export default Modal;
