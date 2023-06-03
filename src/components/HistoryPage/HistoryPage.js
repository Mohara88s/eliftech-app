import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Table, Spinner } from 'react-bootstrap';
import {
  fetchOrders,
  fetchOrderById,
} from '../../redux/orders/orders-operaions';
import ordersSelectors from '../../redux/orders/orders-selectors';

import ErrorMessage from '../ErrorMessage/ErrorMessage';

import styles from './HistoryPage.module.css';

export default function HistoryPage() {
  const dispatch = useDispatch();
  const [orderId, setOrderId] = useState('');
  const [orderEmail, setOrderEmail] = useState('');
  const [orderPhone, setOrderPhone] = useState('');
  const orders = useSelector(ordersSelectors.getOrders);
  const ordersError = useSelector(ordersSelectors.getOrdersError);
  const ordersLoading = useSelector(ordersSelectors.getOrdersLoading);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'id':
        return setOrderId(value);
      case 'email':
        return setOrderEmail(value);
      case 'phone':
        return setOrderPhone(value);
      default:
        return;
    }
  };

  const onSearchIdClick = () => {
    dispatch(fetchOrderById(orderId));
  };
  const onSearchEmailClick = () => {
    dispatch(fetchOrders({ orderEmail }));
  };
  const onSearchPhoneClick = e => {
    e.preventDefault();
    dispatch(fetchOrders({ orderPhone }));
  };

  return (
    <div>
      <Form
        // autoComplete="off"
        className={styles.Form}
      >
        <Form.Group className={styles.Form__Group} controlId="id">
          <Form.Label>Id</Form.Label>
          <Form.Control
            type="text"
            name="id"
            placeholder="Enter orders id"
            value={orderId}
            onChange={handleChange}
            className={styles.Form__Control}
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={onSearchIdClick}
          name="id"
          className={styles.Form__Button}
          disabled={!orderId}
        >
          {!ordersLoading && <span>Search</span>}
          {ordersLoading && <Spinner animation="border" as="span" size="sm" />}
        </Button>

        <Form.Group className={styles.Form__Group} controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            value={orderEmail}
            onChange={handleChange}
            className={styles.Form__Control}
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={onSearchEmailClick}
          name="email"
          className={styles.Form__Button}
          disabled={!orderEmail}
        >
          {!ordersLoading && <span>Search</span>}
          {ordersLoading && <Spinner animation="border" as="span" size="sm" />}
        </Button>

        <Form.Group className={styles.Form__Group} controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            title="XXX-XXX-XXXX"
            placeholder="Enter your phone"
            value={orderPhone}
            onChange={handleChange}
            className={styles.Form__Control}
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={onSearchPhoneClick}
          name="phone"
          className={styles.Form__Button}
          disabled={!orderPhone}
          type="submit"
        >
          {!ordersLoading && <span>Search</span>}
          {ordersLoading && <Spinner animation="border" as="span" size="sm" />}
        </Button>
      </Form>

      {ordersError && <ErrorMessage message={`No data by your query`} />}

      <Table striped bordered hover>
        <thead>
          <tr>
            <td>orders id</td>
            <td>client</td>
            <td>email</td>
            <td>phone</td>
            <td>total price</td>
            <td>shop</td>
            <td>date</td>
          </tr>
        </thead>
        <tbody>
          {orders.map(e => (
            <tr key={e._id}>
              <td>{e._id}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.phone}</td>
              <td>{e.price}</td>
              <td>{e.shop.name}</td>
              <td>
                {new Date(e.createdAt).toLocaleTimeString()}{' '}
                {new Date(e.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
