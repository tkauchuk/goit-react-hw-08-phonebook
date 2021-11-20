import { NavLink } from 'react-router-dom';
import Section from '../Section';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <Section extraStyles={styles.navSection}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink
              to='/'
              exact
              className={styles.link}
              activeClassName={styles.active}
            >
              Homepage
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to='/contacts'
              className={styles.link}
              activeClassName={styles.active}
              >
              Phonebook
            </NavLink>
          </li>
        </ul>
      </nav>

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
    </Section>
  );
}

export default Navigation;
