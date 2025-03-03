import styles from './story.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles);
function CreateStory() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('create-story')}>

                <div className={cx('plus')}>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
                <div className={cx('top')}>
                    <img
                        src="https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-1/480561156_634491585722919_5193215288198790991_n.png?stp=cp0_dst-png_s40x40&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGtGiBnK7fJgBA-Rk2se0UqM537VmaK2RcznftWZorZF1ia1vgZvoxdgvKdoWVmlafEL8qJ4CCsfFBEpp93OWJU&_nc_ohc=sdbKvYLTH-QQ7kNvgHNX8mD&_nc_oc=AdjHYwgkz6N8Qog509JtEkKBjueHtSh6QmycmwM376a_rZeVusEWnNe68Rk6K4eklrgp1SA10MC4o57caCAoNIYa&_nc_zt=24&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=A_UWun1-E4o1JGcpzSejO65&oh=00_AYCc91-NjAvCdNpvrrqIFLOm1OU37JntupuWNda47oywRQ&oe=67CB26D7"
                        alt="story-avatar"
                        className={cx('story-avatar')}
                    />
                </div>
                <div className={cx('bottom')}>
                    <p className={cx('title')}>Create Story</p>
                </div>
            </div>
        </div>
    );
}

export default CreateStory;