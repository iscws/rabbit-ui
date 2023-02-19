import classNames from 'classnames';
import React, { ReactNode, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Button from "../button"
import IconClose from '../icons/IconClose';
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
    type = 'default',
    afterClose,
    confirmLoading = false,
    ...rest
}) => {
    const [firstStart, setFirstStart] = useState(true);
    const [animateStart, setAnimateStart] = useState(false);
    const [visible, setVisible] = useState(false);
    // 是否销毁弹窗内部的子元素
    const [destroyModalChi, setDestryoModalChi] = useState(false);


    const buttonArea: { default: ReactNode; simple: ReactNode } = {
        default: (
            <>
                <span className={`${prefixCls}-footer-item`}>
                    <Button className={`${prefixCls}-button rabbit-default`} onClick={onCancel}>
                        取消
                    </Button>
                </span>

                <span className={`${prefixCls}-footer-item`}>
                    {<Button className={`${prefixCls}-button rabbit-primary`} loading={confirmLoading} onClick={onOk} >
                        确定
                    </Button>
                    }
                </span>
            </>
        ),
        simple: (
            <>
                <span className={`${prefixCls}-footer-item`}>
                    <Button className={`${prefixCls}-button rabbit-default`} onClick={onCancel}>
                        知道了
                    </Button>
                </span>
            </>
        ),
    };
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
                            <IconClose />
                        </div>
                    )}

                    <div className={`${prefixCls}-header`}>
                        <div className={`${prefixCls}-title`}>{title}</div>
                    </div>
                    <div className={`${prefixCls}-body`}>{!destroyModalChi && children}</div>

                    <div className={`${prefixCls}-footer`}>
                        {
                            // 显示自定义footer
                            footer === 'default'
                                ? buttonArea[type]
                                : toArray(footer).map((item, index) => {
                                    return (
                                        <span className={`${prefixCls}-footer-item`} key={index}>
                                            {item}
                                        </span>
                                    );
                                })
                        }
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
};

export default Dialog;
