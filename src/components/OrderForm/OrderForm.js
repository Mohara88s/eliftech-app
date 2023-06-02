import { useDispatch, useSelector } from 'react-redux';
import {  Form } from 'react-bootstrap';
import ordersSelectors from '../../redux/orders/orders-selectors';

import { changeName, changeEmail, changePhone, changeAddress} from '../../redux/orders/orders-actions';
import styles from './OrderForm.module.css';


export default function OrderForm() {
  const dispatch = useDispatch();

  const name = useSelector(ordersSelectors.getName);
  const email = useSelector(ordersSelectors.getEmail);
  const phone = useSelector(ordersSelectors.getPhone);
  const address = useSelector(ordersSelectors.getAddresss);

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
            type="phone"
            name="phone"
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
    </div>
  );
}
