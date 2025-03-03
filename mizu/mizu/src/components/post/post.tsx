import styles from './post.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Post() {
    return (
        <div className={cx('wrapper')}>

            <div className={cx('post')}>
                Post
            </div>
        </div>
    );
}

export default Post;