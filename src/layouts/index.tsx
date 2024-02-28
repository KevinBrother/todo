import { IfElse } from '@/components';
import { ROUTER } from '@/constants';
import { Link, Outlet, useLocation } from '@umijs/max';
import styles from './index.less';

export default function Layout() {
  const location = useLocation();
  console.log('🚀 ~ Layout ~ location:', location);
  const filterPath = [ROUTER.turnplate];

  return (
    <div className={styles.navs}>
      <IfElse if={!filterPath.includes(location.pathname)}>
        <ul className="flex flex-wrap">
          <li>
            <Link to={ROUTER.home}>Home</Link>
          </li>
          <li>
            <Link to={ROUTER.docs}>Docs</Link>
          </li>
          <li>
            <Link to={ROUTER.turnplate}>Turnplate</Link>
          </li>
          <li>
            <Link to={ROUTER.tailwind}>test/tailwind</Link>
          </li>
          <li>
            <Link to={ROUTER.taskDetail}>/todo/pages/task-detail</Link>
          </li>
          <li>
            <Link to={ROUTER.taskList}>/todo/pages/task-list</Link>
          </li>
        </ul>
      </IfElse>
      <Outlet />
    </div>
  );
}
