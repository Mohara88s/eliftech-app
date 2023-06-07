import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  useGeocodingService,
  useGoogleMap,
} from '@ubilabs/google-maps-react-hooks';
import { changeAddress } from '../../redux/orders/orders-actions';

const GeocodingService = ({ initialPosition }) => {
  const dispatch = useDispatch();
  const map = useGoogleMap();

  // Get the geocoder from the useGeocoder hook
  const geocoder = useGeocodingService();

  const [marker, setMarker] = useState(null);
  const [infoWindow, setInfoWindow] = useState(null);

  // Add marker and info window to the map
  useEffect(() => {
    if (!map) {
      return () => {};
    }

    // Add a marker
    const newMarker = new google.maps.Marker({
      map,
      position: initialPosition,
    });

    setMarker(newMarker);

    // Add an infowindow
    const newInfoWindow = new google.maps.InfoWindow({
      content:
        'Your calculated place is here. Click your exact address, please.',
      position: initialPosition,
    });

    setInfoWindow(newInfoWindow);
    newInfoWindow.open(map, newMarker);

    // Remove infowindow and marker from the map
    return () => {
      newInfoWindow?.close();
      newMarker?.setMap(null);
    };
  }, [map]);

  // Run geocoder on click on the map
  useEffect(() => {
    if (!map || !marker || !infoWindow || !geocoder) {
      return () => {};
    }

    // Click on the map and open an infowindow with the reversed geocoded address.
    const clickListener = map.addListener(
      'click',
      (mapsMouseEvent: google.maps.MapMouseEvent) => {
        // Use the geocoder to reverse geocode the position from the map
        // and add the address as content of the infowindow
        geocoder?.geocode(
          { location: mapsMouseEvent.latLng },
          (
            results: google.maps.GeocoderResult,
            status: google.maps.GeocoderStatus,
          ) => {
            if (status !== 'OK' || !results) {
              console.error(
                `Geocoding was not successful for the following reason: ${status}`,
              );

              return;
            }

            const position = results[0].geometry.location;
            const formattedAddress = results[0].formatted_address;

            if (!position || !formattedAddress) {
              return;
            }

            marker.setPosition(position);

            infoWindow.setPosition(position);
            infoWindow.setContent(formattedAddress);
            map.setCenter(results[0].geometry.location);

            dispatch(changeAddress(formattedAddress));
          },
        );
      },
    );

    // Clean up click listener
    return () => {
      if (google && google.maps && google.maps.event) {
        google.maps.event.removeListener(clickListener);
      }
    };
  }, [map, infoWindow, marker, geocoder]);

  return null;
};

export default GeocodingService;
