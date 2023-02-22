import classNames from 'classnames';
import React, { useState } from 'react'
import './style/index.less';

export interface DrawerProps {
    inline?: boolean
    open: boolean;
    onClose: (event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;

    //root
    rootClassname?: string;
    rootStyle?: React.CSSProperties;
    zIndex?: number;

    //mask
    mask?: boolean;
    maskClosable?: boolean;
    maskClassname?: string;
    maskStyle?: React.CSSProperties;

    //wrapper
    height?: string | number;
    placement?: 'top' | 'right' | 'bottom' | 'left';
    size?: 'default' | 'large';
    width?: string | number;

    //content
    contentClassname?: string;
    contentStyle?: React.CSSProperties;

    //header
    headerClassname?: string;
    headerStyle?: React.CSSProperties;

    // closeBtn
    closable?: boolean;
    closeBtnClassname?: string;
    closeBtnStyle?: React.CSSProperties;

    //title
    title?: React.ReactNode;
    titleClassname?: string
    titleStyle?: React.CSSProperties;

    //body
    children?: React.ReactNode;
    bodyClassname?: string
    bodyStyle?: React.CSSProperties;
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
        inline = false,

        //root
        rootClassname = '',
        rootStyle = {},
        zIndex = 1000,

        // mask
        mask = true,
        maskClosable = true,
        maskClassname = '',
        maskStyle = {},

        //wrapper
        placement = 'right',
        size = 'default',
        width = 378,
        height = 378,

        // content
        contentClassname = '',
        contentStyle = {},

        //header
        headerClassname = '',
        headerStyle = {},


        //closeBtn
        closable = true,
        closeBtnClassname = '',
        closeBtnStyle = {},

        //title
        title,
        titleClassname = '',
        titleStyle = {},

        //body
        children,
        bodyClassname = '',
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
        <div className={classNames(prefixCls, rootClassname, { [`${prefixCls}-inline`]: inline })} style={{ ...rootStyle }}>
            {masked
                ?
                <div
                    data-testid="mask-element"
                    className={classNames(
                        `${prefixCls}-mask`,
                        maskClassname,
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
                data-testid="drawer-element"
                style={{
                    ...wrapperStyle
                }}>
                {open ? <div
                    className={classNames(
                        `${prefixCls}-content`,
                        contentClassname
                    )}
                    style={{
                        ...contentStyle,
                    }}>
                    <header
                        className={classNames(
                            `${prefixCls}-header`,
                            headerClassname,
                        )}
                        style={{ ...headerStyle }}>

                        {closable ? <span
                            className={classNames(
                                `${prefixCls}-close`,
                                closeBtnClassname
                            )}
                            onClick={open ? onHide : undefined}
                            style={{ ...closeBtnStyle }}
                        /> : null}

                        <div className={classNames(`${prefixCls}-title`, titleClassname)} style={{ ...titleStyle }}>{title}</div>

                    </header>
                    <main className={classNames(
                        `${prefixCls}-body`,
                        bodyClassname
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
