import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  useAutocompleteService,
  useGoogleMap,
  usePlacesService,
} from '@ubilabs/google-maps-react-hooks';
import ordersSelectors from '../../redux/orders/orders-selectors';
import { changeAddress } from '../../redux/orders/orders-actions';
import { Form } from 'react-bootstrap';

import styles from './PlacesAutocompleteService.module.css';

const maxNumberOfSuggestions = 5;

const PlacesAutocompleteService = () => {
  const [marker, setMarker] = useState(null);
  const [infoWindow, setInfoWindow] = useState(null);

  const dispatch = useDispatch();
  const inputValue = useSelector(ordersSelectors.getAddresss);

  const inputRef = useRef(null);
  const timeout = useRef(null);

  const [suggestions, setSuggestions] = useState([]);
  const [suggestionsAreVisible, setSuggestionsAreVisible] = useState(false);

  const map = useGoogleMap();
  const autocompleteService = useAutocompleteService();
  const placesService = usePlacesService();

  // Update the user input value
  const handleChange = event => {
    dispatch(changeAddress(event.target.value));
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    // Show dropdown with a little delay
    timeout.current = setTimeout(() => {
      setSuggestionsAreVisible(true);
    }, 300);
  };

  // Handle suggestion selection
  const selectSuggestion = suggestion => {
    inputRef.current?.focus();
    dispatch(changeAddress(suggestion.label));

    // Close dropdown
    setSuggestionsAreVisible(false);

    // Get the location from Places Service of the selected place and zoom to it
    placesService?.getDetails(
      { placeId: suggestion.id },
      (
        placeResult: google.maps.places.PlaceResult | null,
        status: google.maps.places.PlacesServiceStatus,
      ) => {
        if (
          status !== google.maps.places.PlacesServiceStatus.OK ||
          !placeResult
        ) {
          return;
        }

        // Get position of the suggestion to move map
        const position = placeResult.geometry?.location;

        if (map && position) {
          map.setZoom(14);
          map.panTo(position);
          marker.setPosition(position);

          infoWindow.setPosition(position);
          infoWindow.setContent(inputValue);
        }
      },
    );
  };

  // Update suggestions and get autocomplete place suggestions
  useEffect(() => {
    if (inputValue.length >= 2) {
      autocompleteService?.getPlacePredictions(
        {
          input: inputValue,
        },
        (
          predictions: google.maps.places.AutocompletePrediction[] | null,
          status: google.maps.places.PlacesServiceStatus,
        ) => {
          if (
            status !== google.maps.places.PlacesServiceStatus.OK ||
            !predictions
          ) {
            return;
          }

          const autocompleteSuggestions = predictions
            .slice(0, maxNumberOfSuggestions)
            .map(prediction => ({
              id: prediction.place_id,
              label: prediction.description,
            }));

          // Update suggestions for dropdown suggestions list
          setSuggestions(autocompleteSuggestions);
        },
      );
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);

  // Add marker and info window to the map
  useEffect(() => {
    if (!map) {
      return () => {};
    }

    // Add a marker
    const newMarker = new google.maps.Marker({
      map,
    });

    setMarker(newMarker);

    // Add an infowindow
    const newInfoWindow = new google.maps.InfoWindow({
      content: '',
    });

    setInfoWindow(newInfoWindow);
    newInfoWindow.open(map, newMarker);

    // Remove infowindow and marker from the map
    return () => {
      newInfoWindow?.close();
      newMarker?.setMap(null);
    };
  }, [map]);

  return (
    <>
      <Form.Group className={styles.searchInput}>
        <Form.Label htmlFor="places-search-autocomplete">Address</Form.Label>
        <Form.Control
          ref={inputRef}
          type="address"
          name="address"
          placeholder="Enter your address"
          value={inputValue}
          onChange={handleChange}
          id="places-search-autocomplete"
          autoComplete="off"
          role="combobox"
          aria-autocomplete="list"
          aria-controls="search-suggestions"
          aria-expanded={suggestionsAreVisible}
        />
        {suggestionsAreVisible && (
          <ul
            className={styles.suggestions}
            id="search-suggestions"
            role="listbox"
            aria-label="Suggested locations:"
          >
            {suggestions.map(suggestion => (
              <li
                key={suggestion.id}
                onClick={() => selectSuggestion(suggestion)}
                id={suggestion.id}
                role="option"
              >
                <span>{suggestion.label}</span>
              </li>
            ))}
          </ul>
        )}
      </Form.Group>
    </>
  );
};

export default PlacesAutocompleteService;
