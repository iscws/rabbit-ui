
import React, { CSSProperties, FC, ReactNode } from 'react';

type ItemProps = {
    index: number;
    direction?: 'vertical' | 'horizontal';
    split?: ReactNode;
    wrap?: boolean;
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
};
const SpaceItem: FC<ItemProps> = (props) => {
    const { index, direction, split, wrap, children, className, style } = props

    return (
        <>
            <div className={className} style={style}>
                {children}
            </div>
            {

            }
        </>
    )
}


type Size = 'small' | 'middle' | 'large' | number
export interface SpaceProps {

    /**
   * @description       对齐方式
   * @default           ''
   */
    align?: 'start' | 'end' | 'center' | 'baseline';

    /**
    * @description      间距方向
    * @default          'horizontal'
    */
    direction?: 'vertical' | 'horizontal';

    className?: string;
    style?: CSSProperties;
    size?: Size | Size[];

    split?: ReactNode;
    wrap?: boolean;
    children?: ReactNode | ReactNode[];
}


const Space: FC<SpaceProps> = (props) => {

    const { children, ...rest } = props

    return (
        <>
            <div
                {...rest}
            >
                {
                    
                }
            </div>
        </>
    )
};


export default Space;