import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setActualShop } from '../../redux/shops/shops-actions';
import { fetchShops } from '../../redux/shops/shops-operaions';
import shopsSelectors from '../../redux/shops/shops-selectors';
import { Button, Spinner } from 'react-bootstrap';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import styles from './Shops.module.css';

export default function Shops() {
  const dispatch = useDispatch();
  const actualShop = useSelector(shopsSelectors.getActualShop);
  const shops = useSelector(shopsSelectors.getShops);
  const shopsError = useSelector(shopsSelectors.getShopsError);
  const shopsLoading = useSelector(shopsSelectors.getShopsLoading);

  useEffect(() => {
    dispatch(fetchShops());
  }, [dispatch]);

  useEffect(() => {
    if (actualShop === null) {
      dispatch(setActualShop(shops.find(e => e._id === shops[0]._id)));
    }
  }, [shops, dispatch, actualShop]);

  const onClickShopButton = e => {
    const { value } = e.currentTarget;
    dispatch(setActualShop(shops.find(e => e._id === value)));
  };

  return (
    <div className={styles.Shops}>
      <h3>Shops:</h3>
      {shopsLoading && <Spinner animation="border" variant="primary" />}
      {shopsError && (
        <ErrorMessage
          message={
            'Unfortunately, shops have been lost. We have already started fixing this problem. Keep calm and be healthy.'
          }
        />
      )}
      <ul className={styles.ShopsList}>
        {shops.map(e => (
          <li key={e._id} className={styles.ShopsList__Item}>
            <Button
              variant={
                actualShop && actualShop._id === e._id
                  ? 'primary'
                  : 'outline-primary'
              }
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
