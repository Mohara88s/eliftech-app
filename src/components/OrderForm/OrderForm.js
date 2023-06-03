import { useDispatch, useSelector } from 'react-redux';
import ordersSelectors from '../../redux/orders/orders-selectors';
import {
  changeName,
  changeEmail,
  changePhone,
  changeAddress,
} from '../../redux/orders/orders-actions';
import { Form } from 'react-bootstrap';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import styles from './OrderForm.module.css';

export default function OrderForm() {
  const dispatch = useDispatch();

  const name = useSelector(ordersSelectors.getName);
  const email = useSelector(ordersSelectors.getEmail);
  const phone = useSelector(ordersSelectors.getPhone);
  const address = useSelector(ordersSelectors.getAddresss);
  const addOrderError = useSelector(ordersSelectors.getAddOrderErrors);
  const addedOrder = useSelector(ordersSelectors.getAddedOrder);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return dispatch(changeName(value));
      case 'email':
        return dispatch(changeEmail(value));
      case 'phone':
        return dispatch(changePhone(value));
      case 'address':
        return dispatch(changeAddress(value));
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch(addOrder({ name, email, phone, address, shop, price, cart }));
    // setName('');
    // setEmail('');
    // setPhone('');
    // setAddress('');
  };

  return (
    <div>
      <Form className={styles.form} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            title="XXX-XXX-XXXX"
            placeholder="Enter your phone"
            value={phone}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="address"
            name="address"
            placeholder="Enter your address"
            value={address}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
      {addOrderError && <ErrorMessage message={addOrderError} />}
      {addedOrder._id && (
        <h2>{`Thank you for your order. Orders Id=${addedOrder._id}`}</h2>
      )}
    </div>
  );
}
