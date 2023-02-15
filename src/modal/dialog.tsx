import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import toArray from '../_utils/toArray';
import { ModalProps } from './modal';
import './style';

const prefixCls = 'rabbit-modal';

const Dialog: React.FC<ModalProps> = ({
    destroyOnClose = false,
    title,
    width,
    children,
    onOk,
    onCancel,
    open = false,
    mask = true,
    keyboard = true,
    footer = 'default',
    closable = true,
    center = false,
    style = {},
    wrapClassName,
    wrapId,
    _useModal = false,
    _useModalClick = false,
    afterClose,
    ...rest
}) => {
    const [firstStart, setFirstStart] = useState(true);
    const [animateStart, setAnimateStart] = useState(false);
    const [visible, setVisible] = useState(false);
    // 是否销毁弹窗内部的子元素
    const [destroyModalChi, setDestryoModalChi] = useState(false);
    useEffect(() => {
        if (firstStart) {
            setFirstStart(false);
            setVisible(true);
            setAnimateStart(true);
        }
    }, [firstStart]);

    useEffect(() => {
        // 禁止滚动
        document.body.style.overflow = !open ? '' : 'hidden';
        if (!firstStart) {
            if (open) {
                setVisible(true);
                // 然后再开始动画
                setAnimateStart(true);
                // 确保每一次打开弹窗子元素不被销毁
                setDestryoModalChi(false);
            } else {
                setAnimateStart(false);
                setTimeout(() => {
                    // 动画结束后把模态框设置为 display: none
                    setVisible(false);
                    // 动画结束后将子元素销毁，添加visible是保证弹窗关闭的时候才销毁子元素，
                    if (destroyOnClose && visible) {
                        setDestryoModalChi(true);
                    }
                    afterClose && afterClose();
                }, 300);
            }
        }
    }, [open]);


    // 键盘关闭弹窗
    useEffect(() => {
        if (keyboard) {
            const closeModal = function (event: KeyboardEvent) {
                let e = event || window.event;
                if (e && e.key === 'Escape') {
                    onCancel && onCancel();
                }
            };
            document.addEventListener('keydown', closeModal, false);
            return () => {
                document.removeEventListener('keydown', closeModal, false);
            };
        }
    }, []);
    return (
        <div
            id={wrapId !== undefined ? wrapId : ''}
            className={`${prefixCls} ${wrapClassName !== undefined ? wrapClassName : ''}`}
            style={firstStart ? { display: 'none' } : { display: visible ? 'flex' : 'none' }}
        >
            {mask && (
                <CSSTransition classNames="rabbit-mask" in={animateStart} timeout={300}>
                    <div className={`${prefixCls}-mask`}></div>
                </CSSTransition>
            )}
            <CSSTransition classNames={'rabbit-modal'} in={animateStart} timeout={300}>
                <div
                    className={classNames(
                        `${prefixCls}-content`,
                        center ? '' : `${prefixCls}-content-default`,
                    )}
                    style={{
                        width,
                        ...style,
                    }}
                >
                    {closable && (
                        <div className={`${prefixCls}-close-x`} onClick={onCancel}>
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
                    )}

                    <div className={`${prefixCls}-header`}>
                        <div className={`${prefixCls}-title`}>{title}</div>
                    </div>
                    <div className={`${prefixCls}-body`}>{!destroyModalChi && children}</div>

                    <div className={`${prefixCls}-footer`}>
                        {
                            // 显示自定义footer
                            footer === 'default' ? (
                                <>
                                    <span className={`${prefixCls}-footer-item`}>
                                        <button className={`${prefixCls}-button rabbit-default`} onClick={onCancel}>
                                            取消
                                        </button>
                                    </span>

                                    <span className={`${prefixCls}-footer-item`}>
                                        <button className={`${prefixCls}-button rabbit-primary`} onClick={onOk}>
                                            确定
                                        </button>
                                    </span>
                                </>
                            ) : (
                                toArray(footer).map((item, index) => {
                                    return (
                                        <span className={`${prefixCls}-footer-item`} key={index}>
                                            {item}
                                        </span>
                                    );
                                })
                            )
                        }
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
};

export default Dialog;
