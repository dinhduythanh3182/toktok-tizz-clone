import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '../index';
import MenuItem from './MenuItem.js';
import Header from './Header';
const cx = classNames.bind(styles);

function Menu({ children, items = [], onChange }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    
    const renderItems = () => {
        return (
            <div className={cx('menu-list-items')}>
                {current.data.map((item, index) => {
                    const isParent = !!item.children;
                    return (
                        <MenuItem
                            key={index}
                            data={item}
                            onClick={() => {
                                if (isParent) {
                                    setHistory((prev) => [...prev, item.children]);
                                } else {
                                    onChange(item);
                                }
                            }}
                        />
                    );
                })}
            </div>
        );
    };
    return (
        <Tippy
            delay={[0, 800]}
            duration={300}
            offset={[12,8]}
            placement="bottom-end"
            interactive
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => setHistory((prev) => prev.slice(0, prev.length - 1))}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={()=>setHistory(prev=>prev.slice(0,1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
