import styles from './RightSideBar.module.scss';
import classNames from 'classnames/bind';
import { SubFunction } from '../components';
import { JSX } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faMagnifyingGlass, faSearch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

interface Contacts {
    image: React.ReactNode | JSX.Element,
    name: string,
}
function RightSideBar() {
    const contacts: Contacts[] = [
        {
            image: <img
                src='https://s120-ava-talk.zadn.vn/1/a/0/1/3/120/e42bc0134723ba72d83f6841677c443e.jpg'
                alt='user-avatar'
            />,
            name: "Trần Quốc Đồng"
        },
        {
            image: <img
                src='https://s120-ava-talk.zadn.vn/7/3/f/2/3/120/fdefb4ed0ff3046a8cd538b77cad6aed.jpg'
                alt='user-avatar'
            />,
            name: "Võ Xuân Lộc"
        },
        {
            image: <img
                src='https://s120-ava-talk.zadn.vn/6/d/3/4/11/120/bd377c646077c1f0ab635d4c5cb5f22c.jpg'
                alt='user-avatar'
            />,
            name: "Nguyễn Chí Thanh"
        },
        {
            image: <img
                src='https://s120-ava-talk.zadn.vn/1/a/0/1/3/120/e42bc0134723ba72d83f6841677c443e.jpg'
                alt='user-avatar'
            />,
            name: "Trần Quốc Đồng"
        },
        {
            image: <img
                src='https://s120-ava-talk.zadn.vn/7/3/f/2/3/120/fdefb4ed0ff3046a8cd538b77cad6aed.jpg'
                alt='user-avatar'
            />,
            name: "Võ Xuân Lộc"
        },
        {
            image: <img
                src='https://s120-ava-talk.zadn.vn/6/d/3/4/11/120/bd377c646077c1f0ab635d4c5cb5f22c.jpg'
                alt='user-avatar'
            />,
            name: "Nguyễn Chí Thanh"
        },
        {
            image: <img
                src='https://s120-ava-talk.zadn.vn/1/a/0/1/3/120/e42bc0134723ba72d83f6841677c443e.jpg'
                alt='user-avatar'
            />,
            name: "Trần Quốc Đồng"
        },
        {
            image: <img
                src='https://s120-ava-talk.zadn.vn/7/3/f/2/3/120/fdefb4ed0ff3046a8cd538b77cad6aed.jpg'
                alt='user-avatar'
            />,
            name: "Võ Xuân Lộc"
        },
        {
            image: <img
                src='https://s120-ava-talk.zadn.vn/6/d/3/4/11/120/bd377c646077c1f0ab635d4c5cb5f22c.jpg'
                alt='user-avatar'
            />,
            name: "Nguyễn Chí Thanh"
        },
    ]
    return (
        <div className={cx("wrapper")}>
            <div className={cx("right-sidebar")}>
                <div className={cx('title')}>
                    <span className={cx('contact-title')}>Contacts</span>
                    <div className={cx("icons")}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </div>
                </div>
                {contacts.map(contact => (
                    <SubFunction icon={contact.image} title={contact.name} />
                ))}
            </div>
        </div>
    );
}

export default RightSideBar;