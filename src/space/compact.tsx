
import React, { cloneElement, createContext, CSSProperties, FC, PropsWithChildren, ReactNode, useContext, useMemo } from 'react';
import toArray from '../utils/toArray';
import './style'

export interface SpaceCompactItemContextType {
    size?: number | [number, number];
    block?: boolean;
    direction?: 'horizontal' | 'vertical';
    isFirstItem?: boolean;
    isLastItem?: boolean;
}

export const SpaceCompactItemContext = createContext<SpaceCompactItemContextType | null>(
    null,
)

export interface SpaceCompactProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: number | [number, number];
    direction?: 'horizontal' | 'vertical';
    block?: boolean;
}

const SpaceCompactItem: FC<PropsWithChildren<SpaceCompactItemContextType>> = ({ children, ...otherProps }) => (
    <SpaceCompactItemContext.Provider value={otherProps}>{children}</SpaceCompactItemContext.Provider>
)

const Compact: FC<SpaceCompactProps> = (props) => {
    const {
        size = 8,
        direction,
        block,
        className,
        children,
        ...restProps
    } = props;

    const [horizontalSize, verticalSize] = React.useMemo(
        () => (Array.isArray(size) ? size : [size, size]),
        [size]
    );
    const Prefix = 'rabbit-space-compact'
    const nclassName = `${Prefix}${direction === 'vertical' ? '-vertical-' : '-'}wrapper`
    const itemClassName = `${Prefix}${direction === 'vertical' ? '-vertical-' : '-'}item`
    const compactItemContext = useContext(SpaceCompactItemContext)

    const childNodes = toArray(children, { keepEmpty: true })
    const nodes = childNodes.map((child, i) => {
        const key = (child && child.key) || `${itemClassName}-${i}`
        //添加类名
        const classNames: string[] = [];
        classNames.push(itemClassName);
        if (i === 0 && (!compactItemContext || compactItemContext?.isFirstItem))
            classNames.push(`${Prefix}${direction === 'vertical' ? '-vertical-' : '-'}first-item`)
        if (i === childNodes.length - 1 && (!compactItemContext || compactItemContext?.isLastItem))
            classNames.push(`${Prefix}${direction === 'vertical' ? '-vertical-' : '-'}last-item`)
        if(block)
            classNames.push(`${Prefix}-block-item`)
        //通过克隆ReactElement给元素添加类名
        classNames.push(child.props.className)
        const children = cloneElement(child, { 'className': classNames.join(' '), key: i })
        return (
            <SpaceCompactItem
                key={key}
                size={size}
                block={block}
                direction={direction}
            // isFirstItem={i === 0 && (!compactItemContext || compactItemContext?.isFirstItem)}
            // isLastItem={i === childNodes.length - 1 && (!compactItemContext || compactItemContext?.isLastItem)}
            >
                {children}
            </SpaceCompactItem>
        );
    });


    return (
        <>
            <div
                className={`${nclassName}${className ? ' ' + className : ''}${block ? ` ${Prefix}-block` : ``}${direction === 'vertical' ? ` ${Prefix}-vertical` : ``}`}
                {...restProps}
            >{nodes}</div>
        </>
    )
}


export default Compact