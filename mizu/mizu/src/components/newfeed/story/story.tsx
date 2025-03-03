import styles from './story.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
interface Props {
    storyImage: string,
    avatarImage: string,
}
function Story({ storyImage, avatarImage }: Props) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('story')}>

                <div className={cx('user-avatar')}>
                    <img
                        className={cx('avatar')}
                        src={avatarImage}
                        alt="" />
                </div>
                <div className={cx('user-story')}>
                    <img
                        className={cx('story-image')}
                        src={storyImage}
                        alt="story" />
                </div>
            </div>
        </div>
    );
}

export default Story;