import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <Link to="/test/tailwind">test/tailwind</Link>
        </li>
        <li>
          <Link to="/todo/pages/task-detail">/todo/pages/task-detail</Link>
        </li>
        <li>
          <Link to="/todo/pages/task-list">/todo/pages/task-list</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
