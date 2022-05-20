import { useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faSpinner,
    faUser,
    faCoins,
    faSignOut,
    faGear,
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '../../../AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import { UploadIcon, MessageIcon, InboxIcon } from '~/components/Icon';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: faEarthAsia,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: faCircleQuestion,
        title: 'Feedback and Help',
        to: './feedback',
    },
    {
        icon: faKeyboard,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const handleChangeMenu = (item) => {
        console.log(item);
    };
    const currentUser = true;

    const userMenu = [
        {
            icon: faUser,
            title: 'View profile',
            to: './@tizz',
        },
        {
            icon: faCoins,
            title: 'Get coins',
            to: './coins',
        },
        {
            icon: faGear,
            title: 'Settings',
            to: './settings',
        },
        ...MENU_ITEMS,
        {
            icon: faSignOut,
            title: 'Log out',
            to: './logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok-logo" />
                <HeadlessTippy
                    // visible={searchResult.length>0}
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h3 className={cx('search-title')}>Account</h3>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder="Search account and videos" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload Video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleChangeMenu}>
                        {currentUser ? (
                            <Image
                                src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/82919150_2631613403764241_8466714968563797267_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=2e5vNb929LYAX9RhsUg&tn=sWp1v2U86-6dxeSr&_nc_ht=scontent.fhan2-3.fna&oh=00_AT-pGuTBwZnQGWPlAUWNhEl_jwlWRvAnMMRNATKIplExBg&oe=62A9A886"
                                className={cx('user-avatar')}
                                alt="Duy Thanh"
                                fallback="https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
