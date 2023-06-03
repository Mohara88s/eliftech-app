import { Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import shopsSelectors from '../../redux/shops/shops-selectors';
import cartSelectors from '../../redux/cart/cart-selectors';

import { addToCart } from '../../redux/cart/cart-actions';

import Message from '../Message/Message';

import plug from '../../public/pictures/1.jpg';
import styles from './Goods.module.css';

export default function Goods() {
  const dispatch = useDispatch();
  const actualShop = useSelector(shopsSelectors.getActualShop);
  const cart = useSelector(cartSelectors.getCart);
  const [isHoveringBtnId, setIsHoveringBtnId] = useState('');

  const handleMouseOver = e => {
    const { value } = e.currentTarget;
    setIsHoveringBtnId(value);
  };
  const handleMouseOut = () => {
    setIsHoveringBtnId('');
  };

  const onClickGoodButton = e => {
    const { value } = e.currentTarget;
    if (cart.findIndex(e => e.good._id === value) === -1) {
      dispatch(
        addToCart({
          good: { ...actualShop.goods.find(e => e._id === value) },
          quantity: 1,
        }),
      );
    }
  };

  return (
    <ul className={styles.GoodsList}>
      {actualShop &&
        actualShop.goods.map(e => (
          <li key={e._id} className={styles.GoodsList__Item}>
            <Card border="primary" className={styles.Card}>
              <Card.Img variant="top" src={e.picture ? e.picture : plug} />
              <Card.Body>
                <Card.Title>{e.name}</Card.Title>
                <Card.Text>Price: {e.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={onClickGoodButton}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  value={e._id}
                >
                  Add to Cart
                </Button>
                {isHoveringBtnId === e._id && (
                  <Message message={`You can add this ${e.name} to the cart`} />
                )}
              </Card.Body>
            </Card>
          </li>
        ))}
    </ul>
  );
}
