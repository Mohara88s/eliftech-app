import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback, useState, useEffect } from 'react';
import { GoogleMapsProvider } from '@ubilabs/google-maps-react-hooks';
import GeocodingService from '../GeocodingService/GeocodingService';
import PlacesAutocompleteService from '../PlacesAutocompleteService/PlacesAutocompleteService';

import ordersSelectors from '../../redux/orders/orders-selectors';
import {
  changeName,
  changeEmail,
  changePhone,
} from '../../redux/orders/orders-actions';

import { Form } from 'react-bootstrap';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import styles from './OrderForm.module.css';

export default function OrderForm() {
  const dispatch = useDispatch();
  const [mapContainer, setMapContainer] = useState(null);
  const [latitude, setLatitude] = useState(53.5582447);
  const [longitude, setLongitude] = useState(9.647645);
  const mapRef = useCallback(node => {
    node && setMapContainer(node);
  }, []);

  const findMyCoordinates = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          console.log(position.coords.latitude, position.coords.longitude);
        },
        err => {
          alert(err.message);
        },
      );
    } else {
      alert('Geolocation is not supported by your browser');
    }
  };

  useEffect(() => {
    findMyCoordinates();
  }, []);

  const mapOptions = {
    center: { lat: latitude, lng: longitude },
    zoom: 14,
    disableDefaultUI: true,
    zoomControl: true,
    zoomControlOptions: {
      position: 3, // Right top
    },
  };

  const name = useSelector(ordersSelectors.getName);
  const email = useSelector(ordersSelectors.getEmail);
  const phone = useSelector(ordersSelectors.getPhone);
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
      default:
        return;
    }
  };

  return (
    <div>
      <GoogleMapsProvider
        googleMapsAPIKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        mapContainer={mapContainer}
        mapOptions={mapOptions}
        libraries={['places']}
      >
        <React.StrictMode>
          <div ref={mapRef} style={{ height: '300px' }} />
          <GeocodingService
            initialPosition={{ lat: latitude, lng: longitude }}
          />
          <PlacesAutocompleteService />
        </React.StrictMode>
      </GoogleMapsProvider>

      <Form className={styles.form}>
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
      </Form>
      {addOrderError && <ErrorMessage message={addOrderError} />}
      {addedOrder._id && (
        <h2>{`Thank you for your order. Orders Id is ${addedOrder._id}`}</h2>
      )}
    </div>
  );
}
