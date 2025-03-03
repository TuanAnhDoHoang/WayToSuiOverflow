import styles from './market.module.scss';
import classNames from 'classnames/bind';
import { Header } from '../../components';

const cx = classNames.bind(styles);
function MarketPlace() {
    return (
        <div className={cx('wrapper')}>

            <div className={cx('market-place')}>
                <Header />

            </div>
        </div>
    );
}

export default MarketPlace;