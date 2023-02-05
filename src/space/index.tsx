

import React, { CSSProperties, FC, ReactElement, ReactNode, useMemo } from 'react';
import toArray from '../utils/toArray';
import { SpaceItem } from './item';


export const SpaceContext = React.createContext({
    latestIndex: 0,
    horizontalSize: 0,
    verticalSize: 0,
});


export interface SpaceProps {

    /**
   * @description       对齐方式
   * @default           'start'
   */
    align?: 'start' | 'end' | 'center' | 'baseline';

    /**
    * @description      间距方向
    * @default          'horizontal'
    */
    direction?: 'vertical' | 'horizontal';

    className?: string;
    style?: CSSProperties;
    size?: number | [number, number];

    split?: ReactNode;
    wrap?: boolean;
    children?: ReactNode | ReactNode[];
}


const Space: FC<SpaceProps> = (props) => {

    const {
        align = 'start',
        direction = 'horizontal',
        className,
        style,
        size = 8,
        split,
        wrap = false,
        children,
        ...rest } = props

    const [horizontalSize, verticalSize] = React.useMemo(
        () => (Array.isArray(size) ? size : [size, size]),
        [size]
    );

    const Prefix = 'rabbit-space'
    const nclassName = `${Prefix}-wrapper`
    const itemClassName = `${Prefix}-item`

    const gapStyle: CSSProperties = {}
    if (wrap) gapStyle.flexWrap = 'wrap'
    if (direction === 'vertical') {
        gapStyle.display = 'flex'
        gapStyle.flexDirection = 'column'
    }
    if (align === 'center' || align === 'baseline') {
        gapStyle.alignItems = align
    } else {
        gapStyle.alignItems = `flex-${align}`
    }


    const childNodes = toArray(children, { keepEmpty: true })
    //标记最后一个子组件
    let latestIndex = 0
    const nodes = childNodes.map((child, i) => {
        if (child !== null && child !== undefined) {
            latestIndex = i
        }
        const key = (child && child.key) || `${itemClassName}-${i}`
        return (
            <SpaceItem
                className={itemClassName}
                key={key}
                direction={direction}
                index={i}
                split={split}
                wrap={wrap}
            >
                {child}
            </SpaceItem>
        );
    });

    const spaceContext = useMemo(() => ({
        latestIndex,
        horizontalSize,
        verticalSize
    }), [latestIndex, horizontalSize, verticalSize])

    return (
        <>
            <div
                className={`${nclassName} ${className === undefined ? '' : className}`}
                style={{
                    ...gapStyle,
                    ...style,
                }}
                {...rest}
            >
                <SpaceContext.Provider value={spaceContext}>{nodes}</SpaceContext.Provider>
            </div>
        </>
    )
};


export default Space;