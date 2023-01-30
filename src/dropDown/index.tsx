import React, { useState } from 'react';
import PropTypes from 'prop-types';
import t from 'prop-types';
import Dropdown from 'rc-dropdown';


export interface DropDownProps {
    /**
     * @description       触发方式
     * @default            hower
     */
    trigger?: 'click' | 'hover';
    /**
     * @description       下拉菜单承载的内容元素
     * @default            []
     */
    items: any
    /**
     * @description       下拉菜单触发元素
     * @default            <Button>按钮<Button/>
     */
    children: any
    //children: any;
}

export type KindMap = Record<Required<DropDownProps>['trigger'], string>;

const prefixCls = 'rabbit-dropdown';

const DropDown: React.FC<DropDownProps> = ({ items, children }) => {
    const [displayMenu, setDisplayMenu] = useState<boolean>(false)
    const [title, setTitle] = useState<string>('');//高亮先前选择的元素
    const showDropdownMenu = () => setDisplayMenu(!displayMenu)

    const hideDropdownMenu = v => {
        setDisplayMenu(false)
        setTitle(v)
    }
    return (
        <>
            <div style={{ 'position': 'fixed', 'inset': '0px' }} onClick={() => setDisplayMenu(false)}></div>
            <div className='dropdown'>
                <div className='button' onClick={() => showDropdownMenu()}>
                    {children}
                </div>
                {
                    displayMenu && (
                        <div className='menu'>
                            {items.map((item) => (
                                <div className={item === title ? "active" : ""} onClick={() => hideDropdownMenu(item)} key={item.toString()}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    )
                }
            </div>
        </>
    )
};

DropDown.propTypes = {
    trigger: t.oneOf(['click', 'hover']),
};

Dropdown.propTypes = {
    //items: PropTypes.array
}

export default DropDown;