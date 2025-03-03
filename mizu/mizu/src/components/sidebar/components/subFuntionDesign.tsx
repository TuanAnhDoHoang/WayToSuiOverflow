import styles from './subFuntionDesign.module.scss'
import classNames from 'classnames/bind';
import { JSX, cloneElement } from 'react';

const cx = classNames.bind(styles);
interface Children {
    icon: React.ReactNode | JSX.Element,
    title: string,
}
function SubFuntionDesign({ icon, title }: Children) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx("subFuntion")}>
                <span className={cx('icon')}>{icon}</span>
                <span className={cx('title')}>{title}</span>
            </div>
        </div>
    );
}

export default SubFuntionDesign;