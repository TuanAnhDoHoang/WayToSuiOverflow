import styles from './notfound.module.scss'
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function NotFound() {
    return (
        <div className={cx("wrapper")}>

            <div className={cx("not-found")}>
                <Link to="/" > Back to home</Link>
                <h1>404: URL NOT FOUND</h1>
            </div>
        </div>
    );
}

export default NotFound;