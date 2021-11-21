import { NavLink } from 'react-router-dom';
import styles from './AuthMenu.module.css';

function AuthMenu() {
  return (
    <ul className={styles.authList}>
      <li className={styles.authItem}>
        <NavLink
          to='/register'
          className={styles.link}
          activeClassName={styles.active}
        >
          Sign up
        </NavLink>
      </li>
      <li className={styles.authItem}>
        <NavLink
          to='/login'
          className={styles.link}
          activeClassName={styles.active}
        >
          Log in
        </NavLink>
      </li>
    </ul>
  );
}

export default AuthMenu;