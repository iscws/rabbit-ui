import classNames from 'classnames';
import React, { useState } from 'react'

export interface DrawerProps {
    children?: React.ReactNode;
    autoFocus?: boolean;
    closable?: boolean;
    height?: string | number;
    keyboard?: boolean;
    mask?: boolean;
    maskClosable?: boolean;
    maskStyle?: React.CSSProperties;
    placement?: 'top' | 'right' | 'bottom' | 'left';
    size?: 'default' | 'large';
    contentStyle?: React.CSSProperties;
    title?: React.ReactNode;
    headerStyle?: React.CSSProperties;
    bodyStyle?: React.CSSProperties;
    rootStyle?: React.CSSProperties;
    titleStyle?: React.CSSProperties;
    closeBtnStyle?: React.CSSProperties;
    open?: boolean;
    width?: string | number;
    zIndex?: number;
    onClose?: (event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
}

const prefixCls = 'rabbit-drawer'

const Drawer: React.FC<DrawerProps> = props => {

    const [animShow, setAnimShow] = useState(false)
    const [masked, setMasked] = useState(false)
    // let pushed = true
    // let masked = false

    const {
        open,
        onClose,

        //root
        rootStyle = {},
        zIndex = 1000,

        // mask
        mask = true,
        maskClosable = true,
        maskStyle = {},

        //wrapper
        placement = 'right',
        size = 'default',
        width = 378,
        height = 378,

        // content
        children,
        contentStyle = {},

        //header
        title,
        headerStyle = {},


        //closeBtn
        closable = true,
        closeBtnStyle = {},

        //title
        titleStyle = {},

        //body
        bodyStyle = {},

    } = props




    React.useEffect(() => {


        if (open) {

            setAnimShow(true)
            if (mask) {
                setMasked(true)
            }
        } else {
            setMasked(false)
        }
    }, [open])



    // if (open) {
    //     pushed = false
    //     if (mask) {
    //         masked = true
    //     }
    // } else {
    //     pushed = true
    //     masked = false
    // }

    rootStyle.zIndex = zIndex

    const realWith = size === 'large' ? 736 : width
    const realHeight = size === 'large' ? 736 : height

    const wrapperStyle: React.CSSProperties = {};


    const onHide = () => {
        if (typeof onClose === 'function') {
            setAnimShow(false)
            const timer = setTimeout(() => {
                onClose()
                clearTimeout(timer)
            }, 300)
        }
    }

    if (!animShow) {
        switch (placement) {
            case 'top':
                wrapperStyle.transform = `translateY(${-realHeight}px)`;
                break;
            case 'bottom':
                wrapperStyle.transform = `translateY(${realHeight}px)`;
                break;
            case 'left':
                wrapperStyle.transform = `translateX(${-realWith}px)`;
                break;
            default:
                wrapperStyle.transform = `translateX(${realWith}px)`;
                break;
        }
    }


    if (placement === 'right' || placement === 'left') {
        wrapperStyle.width = Number(realWith)
    } else {
        wrapperStyle.height = Number(realHeight)
    }

    return (
        <div className={prefixCls} style={{ ...rootStyle }}>
            {masked
                ?
                <div
                    className={classNames(
                        `${prefixCls}-mask`,
                        {
                            [`${prefixCls}-mask-in`]: animShow,
                            [`${prefixCls}-mask-out`]: !animShow,
                        }
                    )}
                    style={{ ...maskStyle }}
                    onClick={maskClosable && open ? onHide : undefined}
                />
                : null
            }
            {/* <div
                className={classNames(
                    `${prefixCls}-mask`
                )}
                style={{ ...maskStyle }}
                onClick={maskClosable && open ? onHide : undefined}
            /> */}
            <div
                className={classNames(
                    `${prefixCls}-wrapper`,
                    `${prefixCls}-${placement}`
                )}
                style={{
                    ...wrapperStyle
                }}>
                {open ? <div
                    className={classNames(
                        `${prefixCls}-content`,
                    )}
                    style={{
                        ...contentStyle,
                    }}>
                    <header
                        className={classNames(
                            `${prefixCls}-header`
                        )}
                        style={{ ...headerStyle }}>

                        {closable ? <span
                            className={`${prefixCls}-close`}
                            onClick={open ? onHide : undefined}
                            style={{ ...closeBtnStyle }}
                        /> : null}

                        <div className={`${prefixCls}-title`} style={{ ...titleStyle }}>{title}</div>

                    </header>
                    <main className={classNames(
                        `${prefixCls}-body`
                    )}
                        style={{ ...bodyStyle }}>
                        {children}
                    </main>
                </div> : null}

            </div>
        </div>

    )
}

export default Drawer
