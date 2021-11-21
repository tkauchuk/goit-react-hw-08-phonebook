import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/authentification/auth-selectors';
import styles from './Navigation.module.css';

import Section from '../Section';
import AuthMenu from '../AuthMenu';
import UserMenu from '../UserMenu';


function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsUserLoggedIn);

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
      {
        isLoggedIn ? <UserMenu /> : <AuthMenu />
      }
    </Section>
  );
}

export default Navigation;
