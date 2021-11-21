import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/authentification/auth-selectors';
import authOperations from '../../redux/authentification/auth-operations';



import styles from './UserMenu.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  const userEmail = useSelector(authSelectors.getUserEmail);

  return (
    <div className={styles.menu}>
      <span className={styles.username}>{userEmail}</span>
      <button
        type="button"
        className={styles.button}
        onClick={() => {dispatch(authOperations.logout())}}
      >
        Log out
      </button>
    </div>
  );
}

export default UserMenu;