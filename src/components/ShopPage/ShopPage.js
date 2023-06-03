import { useEffect } from 'react';
import Shops from '../Shops/Shops';
import Goods from '../Goods/Goods';
import styles from './ShopPage.module.css';

export default function ShopPage() {
  useEffect(() => {
    window.scrollBy(0, -1000);
  }, []);

  return (
    <div>
      <ul className={styles.AreasList}>
        <li>
          <Shops />
        </li>
        <li>
          <Goods />
        </li>
      </ul>
    </div>
  );
}
