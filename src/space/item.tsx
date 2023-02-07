
import React, { FC, ReactNode, useContext } from 'react';
import { SpaceContext } from '.';

type SpaceItemProps = {
    index: number;
    direction?: 'vertical' | 'horizontal';
    split?: string | ReactNode;
    wrap?: boolean;
    children?: ReactNode;
    className?: string;
};

export const SpaceItem: FC<SpaceItemProps> = (props) => {
    const { index, direction, split, wrap, children, className, ...rest } = props

    const { latestIndex } = useContext(SpaceContext);

    if (children === null || children === undefined) {
        return null;
    }
    return (
        <>
            <div className={className}>
                {children}
            </div>
            {
                index < latestIndex && split && (
                    <span className={`${className}-split`}>
                        {split}
                    </span>
                )
            }
        </>
    )
}