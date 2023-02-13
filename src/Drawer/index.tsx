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
    style?: React.CSSProperties;
    title?: React.ReactNode;
    headerStyle?: React.CSSProperties;
    mainStyle?: React.CSSProperties;
    rootStyle?: React.CSSProperties;
    open?: boolean;
    width?: string | number;
    zIndex?: number;
    onClose?: (event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
}

const prefixCls = 'rabbit-drawer'

const Drawer: React.FC<DrawerProps> = props => {

    const [pushed, setPushed] = useState(true)
    const [masked, setMasked] = useState(false)
    // let pushed = true
    // let masked = false

    const {
        // autoFocus = true,
        // closable = true,
        height = 378,
        // keyboard = true,

        // mask
        mask = true,
        maskClosable = true,
        maskStyle = {},

        // drawer
        children,
        placement = 'top',
        size = 'default',
        style = {},

        //header
        title,
        headerStyle = {},

        //main
        mainStyle = {},

        open,
        width = 378,

        //root
        rootStyle = {},
        zIndex = 1000,
        onClose

    } = props




    React.useEffect(() => {


        if (open) {
            setPushed(false)
            if (mask) {
                setMasked(true)
            }
        } else {
            setPushed(true)
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

    if (masked) {
        if (open) {
            maskStyle.display = 'block'
        }
        maskStyle.opacity = 1

    } else {
        if (!open) {
            maskStyle.display = 'none'
        }
        maskStyle.opacity = 0
    }

    const onHide = () => {
        if (typeof onClose === 'function') {
            setMasked(false)
            setPushed(true)
            const timer = setTimeout(() => {
                onClose()
                clearTimeout(timer)
            }, 300)
        }
    }

    if (pushed) {
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
            {/* {masked
                ?
                <div
                    className={classNames(
                        `${prefixCls}-mask`
                    )}
                    style={{ ...maskStyle }}
                    onClick={maskClosable && open ? onClose : undefined}
                />
                : null
            } */}
            <div
                className={classNames(
                    `${prefixCls}-mask`
                )}
                style={{ ...maskStyle }}
                onClick={maskClosable && open ? onHide : undefined}
            />
            {open ? <div
                className={classNames(
                    `${prefixCls}-content`,
                    `${prefixCls}-${placement}`
                )}
                style={{
                    ...style,
                    ...wrapperStyle
                }}>
                <header
                    className={classNames(
                        `${prefixCls}-header`
                    )}
                    style={{ ...headerStyle }}>
                    {title}
                </header>
                <main className={classNames(
                    `${prefixCls}-main`
                )}
                    style={{ ...mainStyle }}>
                    {children}
                </main>
            </div> : null}
        </div>

    )
}

export default Drawer
