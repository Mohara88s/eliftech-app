import { Card, Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import ordersSelectors from '../../redux/orders/orders-selectors';
import cartSelectors from '../../redux/cart/cart-selectors';
import shopsSelectors from '../../redux/shops/shops-selectors';

import { removeFromCart, updateCart } from '../../redux/cart/cart-actions';
import { addOrder } from '../../redux/orders/orders-operaions';

import plug from '../../public/pictures/1.jpg';
import styles from './CartGoods.module.css';

export default function CartGoods() {
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const name = useSelector(ordersSelectors.getName);
  const email = useSelector(ordersSelectors.getEmail);
  const phone = useSelector(ordersSelectors.getPhone);
  const address = useSelector(ordersSelectors.getAddresss);
  const cart = useSelector(cartSelectors.getCart);
  const shop = useSelector(shopsSelectors.getActualShop);

  const handleChange = ({ target: { name, value } }) => {
    const quantity = Number(value);
    if (quantity === 0) {
      dispatch(removeFromCart({ _id: name }));
    } else {
      dispatch(updateCart({ _id: name, quantity }));
    }
  };

  useEffect(() => {
    setTotalPrice(
      cart
        .reduce((total, e) => {
          return total + e.quantity * e.good.price;
        }, 0)
        .toFixed(2),
    );
  }, [cart]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      addOrder({ name, email, phone, address, shop, price: totalPrice, cart }),
    );
  };

  return (
    <div>
      <ul className={styles.CartGoodsList}>
        {cart.map(e => (
          <li key={e.good._id} className={styles.CartGoodsList__Item}>
            <Card className={styles.Card} border="primary">
              <Card.Img
                src={e.good.picture ? e.good.picture : plug}
                className={styles.Card__Img}
              />
              <Card.Body className={styles.Card__Body}>
                <Card.Title className={styles.Card__Title}>
                  {e.good.name}
                </Card.Title>
                <Card.Text>Price: {e.good.price}</Card.Text>
                <InputGroup>
                  <Form.Control
                    value={e.quantity}
                    name={e.good._id}
                    type="number"
                    onChange={handleChange}
                  />
                </InputGroup>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
      <h3>Total price: {totalPrice}</h3>
      <Button className={styles.button} onClick={handleSubmit} type="submit">
        Submit
      </Button>
    </div>
  );
}
