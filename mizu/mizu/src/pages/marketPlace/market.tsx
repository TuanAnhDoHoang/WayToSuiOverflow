import styles from './market.module.scss';
import classNames from 'classnames/bind';
import { Header } from '../../components';
import { MarketSideBar } from './components';

const cx = classNames.bind(styles);
function MarketPlace() {
    return (
        <div className={cx('wrapper')}>

            <div className={cx('market-place')}>
                <Header />
                <div className={cx('sidebar')}>
                    <MarketSideBar />
                </div>
            </div>
        </div>
    );
}

export default MarketPlace;