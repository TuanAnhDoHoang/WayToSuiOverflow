import styles from './status.module.scss';
import classNames from 'classnames/bind';
import { SubFunction } from '../../sidebar/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileVideo, faRadiation, faSmileBeam, faVideoCamera } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function StatusBar() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("status-bar")}>
                <div className={cx("status-write-section")}>
                    <img
                        className={cx('avatar')}
                        src="https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-1/480561156_634491585722919_5193215288198790991_n.png?stp=dst-png_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGtGiBnK7fJgBA-Rk2se0UqM537VmaK2RcznftWZorZF1ia1vgZvoxdgvKdoWVmlafEL8qJ4CCsfFBEpp93OWJU&_nc_ohc=sdbKvYLTH-QQ7kNvgFp8Udo&_nc_oc=AdiMo0uDFl2Q5NrTbv-PlMGAUEHhwZuP90CPkEukxr5SqpFEpmyOdfT4l--MVWt_BRrnLmmW9ZL-1E0tEzS-Ttfl&_nc_zt=24&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=AgvRhG9096mMlXyoOtjd8nd&oh=00_AYDLihaOin3DerIw_RVSl-DmPiFvaJDOOws9drwlEL1gUA&oe=67C8F457"
                        alt="avatar"
                    />
                    <input className={cx('status-input')} placeholder='How do you feel today?' />
                </div>
                <div className={cx("status-funtions")}>
                    <div className={cx('live-stream')}>
                        <FontAwesomeIcon icon={faVideoCamera} className={cx('icon')} />
                        <span className={cx('des')} >Live stream</span>
                    </div>
                    <div className={cx('image-video')}>

                        <FontAwesomeIcon icon={faFileVideo} className={cx('icon')} />
                        <span className={cx('des')}>Images/video</span>
                    </div>
                    <div className={cx('emotional')}>
                        <FontAwesomeIcon icon={faSmileBeam} className={cx('icon')} />
                        <span className={cx('des')}>Emotional</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StatusBar;