import styles from './sidebar.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCartPlus, faEllipsis, faEllipsisVertical, faGear, faGlasses, faHippo, faMagnifyingGlass, faMailReply, faPlus, faShop, faTag } from '@fortawesome/free-solid-svg-icons';
import { SubFunction } from '../../../../components/sidebar/components';

const cx = classNames.bind(styles)
function SideBar() {

    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar')}>
                <div className={cx('header')}>

                    <div className={cx('title-setting')}>
                        <h1 className={cx('title')}>MarketPlace</h1>
                        <div className={cx('setting')}>
                            <FontAwesomeIcon icon={faGear} className={cx('setting-icon')} />
                        </div>
                    </div>

                    <div className={cx('search-section')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-icon')} />
                        <input
                            className={cx('search')}
                            type="text"
                            placeholder='Search in MarketPlace'
                        />
                    </div>

                </div>
                <div className={cx('toolbar')}>
                    <SubFunction
                        icon={<FontAwesomeIcon icon={faShop} />}
                        title="All"
                    />
                    <SubFunction
                        icon={<FontAwesomeIcon icon={faBell} />}
                        title="Anotation"
                    />
                    <SubFunction
                        icon={<FontAwesomeIcon icon={faMailReply} />}
                        title="Mail"
                    />
                    <SubFunction
                        icon={<FontAwesomeIcon icon={faCartPlus} />}
                        title="Cart"
                    />
                    <SubFunction
                        icon={<FontAwesomeIcon icon={faTag} />}
                        title="Sell"
                    />
                </div>
                <div className={cx('new-post-btn')}>
                    <button>
                        <FontAwesomeIcon icon={faPlus} />
                        <p>Add new product</p>
                    </button>
                </div>
                <div className={cx('location')}>
                    <h3>Location</h3>
                    <p>HCM city - around 65km</p>
                </div>
                <div className={cx('fields')}>
                    <h3>Fields</h3>

                    <SubFunction
                        icon={<FontAwesomeIcon icon={faHippo} />}
                        title="pokemon"
                    />
                </div>
            </div>
        </div>
    );
}

export default SideBar;