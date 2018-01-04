import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'


const InnerMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: 35.6585805, lng: 131.644 }}
  />
));

const Map = props => (
  <InnerMap
    containerElement={(<div />)}
    mapElement={(<div />)}
  />
);

export default Map;
