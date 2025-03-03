import styles from './LeftSideBar.module.scss';
import classNames from 'classnames/bind';
import { SubFunction } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown, faClock, faFaceAngry, faFeed, faLayerGroup, faMarker, faTag, faUserGroup, faVideoCamera } from '@fortawesome/free-solid-svg-icons';
import { JSX } from 'react';

const cx = classNames.bind(styles);
interface Props {
    icon: React.ReactNode | JSX.Element,
    title: string,
}
function LeftSideBar() {
    const props: Props[] = [
        {
            icon:
                <img
                    src="https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-1/480561156_634491585722919_5193215288198790991_n.png?stp=cp0_dst-png_s40x40&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGtGiBnK7fJgBA-Rk2se0UqM537VmaK2RcznftWZorZF1ia1vgZvoxdgvKdoWVmlafEL8qJ4CCsfFBEpp93OWJU&_nc_ohc=sdbKvYLTH-QQ7kNvgH4m2-S&_nc_oc=AdixE5l9vtwiifyrm9kpXch8__OAQW6ETNpvcUwaWIjxtxZ6F3wWZ21nJKVadc8sGPDBUemr47IJC5FCKKJGtoeQ&_nc_zt=24&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=Ayp-8Wx44bbNBulFz8Yo9S8&oh=00_AYB0e1g-Kiph5vNnTjgUoYF514bRxcfOvyZmzX6YF_QFZA&oe=67C9D557"
                    alt="user-avatar"
                />,
            title: "Anhdoo",
        },
        {
            icon: <FontAwesomeIcon icon={faUserGroup} />,
            title: "Friends"
        },
        {
            icon: <FontAwesomeIcon icon={faClock} />,
            title: "Memories"
        },
        {
            icon: <FontAwesomeIcon icon={faTag} />,
            title: "Saved"
        },
        {
            icon: <FontAwesomeIcon icon={faLayerGroup} />,
            title: "Group"
        },
        {
            icon: <FontAwesomeIcon icon={faVideoCamera} />,
            title: "Video"
        },
        {
            icon: <FontAwesomeIcon icon={faMarker} />,
            title: "Market place"
        },
        {
            icon: <FontAwesomeIcon icon={faFeed} />,
            title: "Feed Board"
        },
        {
            icon: <FontAwesomeIcon icon={faArrowCircleDown} />,
            title: "More"
        },
    ]
    return (<div className={cx("wrapper")}>
        <div className={cx("left-sidebar")}>
            {props.map(prop => (
                <SubFunction icon={prop.icon} title={prop.title} />
            ))}
        </div>
    </div>);
}

export default LeftSideBar;