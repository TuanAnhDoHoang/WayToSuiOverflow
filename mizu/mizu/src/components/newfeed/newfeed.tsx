import styles from './newfeed.module.scss'
import classNames from 'classnames/bind';
import Post from '../post/post';
import StatusBar from './status/status';
import StorySection from './story/storySection/storySection';

const cx = classNames.bind(styles);
function Newfeed() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('newfeed')}>
                <StatusBar />
                <StorySection />
                <Post />
            </div>
        </div>
    );
}

export default Newfeed;