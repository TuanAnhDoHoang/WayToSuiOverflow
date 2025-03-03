import styles from './App.module.scss'
import classNames from 'classnames/bind';
import { Header, LeftSideBar, RightSideBar, Newfeed } from './components';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
function App() {
  const [hideLeftBar, setHideLeftBar] = useState(false);
  const [hideRightBar, setHideRightBar] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 1000) { setHideLeftBar(true) } else { setHideLeftBar(false) }
    if (window.innerWidth <= 1270) { setHideRightBar(true) } else { setHideRightBar(false) }
    const handleResize = () => {
      if (window.innerWidth <= 1000) { setHideLeftBar(true) } else { setHideLeftBar(false) }
      if (window.innerWidth <= 1270) { setHideRightBar(true) } else { setHideRightBar(false) }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.addEventListener('resize', handleResize);
    }
  }, [window.innerWidth]);


  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx('content')}>
        {!hideLeftBar &&
          <div className={cx('left-sidebar')}>
            <LeftSideBar />
          </div>
        }
        <div className={cx('newfeed')}>
          <Newfeed />
        </div>

        {!hideRightBar &&
          <div className={cx('right-sidebar')}>
            <RightSideBar />
          </div>
        }
      </div>
    </div>
  )
}

export default App
