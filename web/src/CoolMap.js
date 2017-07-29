import React, { Component } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet/dist/leaflet';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// import 'font-awesome/css/font-awesome.css';
// import 'leaflet.awesome-markers/dist/leaflet.awesome-markers.css';
// import 'leaflet.awesome-markers/dist/leaflet.awesome-markers';

import './CoolMap.css';

class CoolMap extends Component {
  render() {
    const position = [-12.4634, 130.8456];

    const myicon = L.icon({
      iconUrl: markerIcon,
      iconSize: [35, 45],
      iconAnchor: [17, 42],
      popupAnchor: [1, -32],
      shadowUrl: markerShadow,
      shadowSize: [36, 16],
      shadowAnchor: [10, 12]
    });

    return (
      <Map center={position} zoom={14}>
        <TileLayer
          url={this.props.url}
          // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={myicon}>
          {/*<Popup>*/}
            {/*<span>A pretty CSS3 popup.<br/>Easily customizable.</span>*/}
          {/*</Popup>*/}
        </Marker>
      </Map>
    );
  }
}

export default CoolMap;
