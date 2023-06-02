import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {setActualShop} from '../../redux/shops/shops-actions';
import shopsSelectors from '../../redux/shops/shops-selectors';

import styles from './Shops.module.css';


export default function Shops({ shops }) {
  const dispatch = useDispatch();
  const actualShop = useSelector(shopsSelectors.getActualShop);


  const onClickShopButton = e => {
    const { value } = e.currentTarget;
    dispatch(setActualShop(shops.find(e => e._id === value)))
  };

  return (
    <div className={styles.Shops}>
      <h3>Shops:</h3>
      <ul className={styles.ShopsList}>
        {shops.map(e => (
          <li key={e._id} className={styles.ShopsList__Item}>
            <Button
              variant={ actualShop && (actualShop._id === e._id) ? "primary" : "outline-primary"}
              onClick={onClickShopButton}
              value={e._id}
              className={styles.ShopsList__Button}
            >
              {e.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
