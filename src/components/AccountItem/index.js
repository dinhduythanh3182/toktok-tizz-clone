import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss'


const cx = classNames.bind(styles);
function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/63a16abbdd083f338d651585ef74db99~c5_300x300.webp?x-expires=1652688000&x-signature=tW36SZ9MUtCqgKvifPO3HeFQ6Qg%3D" alt="" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen phuong Hoa</span>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>p.hoa1994</span>
            </div>
        </div>
     );
}

export default AccountItem;