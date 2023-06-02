import CartGoods from '../CartGoods/CartGoods';
import OrderForm from '../OrderForm/OrderForm';

import styles from './ShoppingCartPage.module.css';


export default function ShoppingCartPage() {
  return (
    <div>
      <ul className={styles.AreasList}>
        <li className={styles.AreasList__Item}>
        <OrderForm />
        </li>
        <li className={styles.AreasList__Item}>
        <CartGoods />
        </li>
      </ul>
    </div>
  );
}
