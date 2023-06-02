import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <ul className={styles.NavigationList}>
        <li className={styles.NavigationList__item}>
          <NavLink
            exact
            to="/eliftech-app/"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Shop
          </NavLink>
        </li>
        <li className={styles.NavigationList__item}>
          <NavLink
            exact
            to="/shopping-cart"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Shopping Cart
          </NavLink>
        </li>
        <li className={styles.NavigationList__item}>
          <NavLink
            exact
            to="/history"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            History
          </NavLink>
        </li>
        <li className={styles.NavigationList__item}>
          <NavLink
            exact
            to="/coupons"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Coupons
          </NavLink>
        </li>        
      </ul>
    </nav>
  );
};
export default Navigation;
