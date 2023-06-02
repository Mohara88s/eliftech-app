import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Shops from '../Shops/Shops';
import Goods from '../Goods/Goods';
import {fetchShops} from '../../redux/shops/shops-operaions';
import shopsSelectors from '../../redux/shops/shops-selectors';
import {setActualShop} from '../../redux/shops/shops-actions';

import styles from './ShopPage.module.css';


export default function ShopPage() {
  useEffect(() => {
    window.scrollBy(0, -1000);
  }, []);

  const dispatch = useDispatch();
  const actualShop = useSelector(shopsSelectors.getActualShop);
  const shops = useSelector(shopsSelectors.getShops);

  useEffect(() => {
    dispatch(fetchShops());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setActualShop(shops.find(e => e._id === shops[0]._id)))

  }, [shops]);
  return (
    <div>
      <ul className={styles.AreasList}>
        <li>
          <Shops shops={shops}/>
        </li>
        <li>
          <Goods/>
        </li>
      </ul>
    </div>
  );
}
