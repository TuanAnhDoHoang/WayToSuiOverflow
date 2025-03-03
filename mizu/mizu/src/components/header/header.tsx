import styles from './header.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons/faFacebookMessenger';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import {
    faMagnifyingGlass,
    faHouse,
    faTv,
    faShop,
    faPeopleGroup,
    faGamepad,
    faBars,
    faBell,
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import App from '../../App';
import { MarketPlace } from '../../pages';

const cx = classNames.bind(styles);
function Header() {
    const [HideMain, setHideMain] = useState(false);
    const [HideInput, setHideInput] = useState(false);
    useEffect(() => {
        if (window.innerWidth <= 910) { setHideMain(true); } else { setHideMain(false); }
        if (window.innerWidth <= 1250) { setHideInput(true); } else { setHideInput(false); }
        const handleResize = () => {
            if (window.innerWidth <= 910) { setHideMain(true); } else { setHideMain(false); }
            if (window.innerWidth <= 1250) { setHideInput(true); } else { setHideInput(false); }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [window.innerWidth])
    return (
        <div className={cx('wrapper')}>
            <div className={cx("header")}>
                <div className={cx("logo-search")}>
                    {/* <FontAwesomeIcon icon={faFacebook} className={cx('facebook-logo', 'icons')} /> */}
                    <img src="https://i.postimg.cc/s2PzQDCZ/mizu.jpg" className={cx('facebook-logo', 'icons')} />
                    {!HideInput
                        ?
                        <div className={cx("search-section")}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-logo', 'icons')} />
                            <input className={cx('search-bar')} type="text" placeholder='input something bad' />
                        </div>
                        :
                        <div className={cx('search-section-hidden')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-logo', 'icons')} />
                        </div>
                    }
                </div>
                {!HideMain &&
                    <div className={cx("main-functions")}>
                        <ul className={cx("list-functions")}>
                            <li>
                                <Link to="/">
                                    <FontAwesomeIcon icon={faHouse} className={cx('home-logo', 'icons')} />
                                </Link>
                            </li>
                            <li>
                                <Link to="/video">
                                    <FontAwesomeIcon icon={faTv} className={cx('video-logo', 'icons')} />
                                </Link>
                            </li>
                            <li>
                                <Link to="/market">
                                    <FontAwesomeIcon icon={faShop} className={cx('shop-logo', 'icons')} />
                                </Link>
                            </li>
                            <li>
                                <Link to="/group">
                                    <FontAwesomeIcon icon={faPeopleGroup} className={cx('group-logo', 'icons')} />
                                </Link>
                            </li>
                            <li>
                                <Link to="/game">
                                    <FontAwesomeIcon icon={faGamepad} className={cx('game-logo', 'icons')} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                }
                <div className={cx("user-functions")}>
                    <FontAwesomeIcon icon={faBars} className={cx('menu-logo', 'icons')} />
                    <FontAwesomeIcon icon={faFacebookMessenger} className={cx('mess-logo', 'icons')} />
                    <FontAwesomeIcon icon={faBell} className={cx('bell-logo', 'icons')} />
                    <div className={cx('user-avatar', 'icons')}>
                        <img
                            className={cx('avatar')}
                            src="https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-1/480561156_634491585722919_5193215288198790991_n.png?stp=dst-png_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGtGiBnK7fJgBA-Rk2se0UqM537VmaK2RcznftWZorZF1ia1vgZvoxdgvKdoWVmlafEL8qJ4CCsfFBEpp93OWJU&_nc_ohc=sdbKvYLTH-QQ7kNvgFp8Udo&_nc_oc=AdiMo0uDFl2Q5NrTbv-PlMGAUEHhwZuP90CPkEukxr5SqpFEpmyOdfT4l--MVWt_BRrnLmmW9ZL-1E0tEzS-Ttfl&_nc_zt=24&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=AgvRhG9096mMlXyoOtjd8nd&oh=00_AYDLihaOin3DerIw_RVSl-DmPiFvaJDOOws9drwlEL1gUA&oe=67C8F457"
                            alt="avatar"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header;