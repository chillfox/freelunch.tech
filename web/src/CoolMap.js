import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './CoolMap.css';

class CoolMap extends Component {
  render() {
    const position = [-12.4634, 130.8456];
    return (
      <Map center={position} zoom={14}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/*<Marker position={position}>*/}
          {/*<Popup>*/}
            {/*<span>A pretty CSS3 popup.<br/>Easily customizable.</span>*/}
          {/*</Popup>*/}
        {/*</Marker>*/}
      </Map>
    );
  }
}

export default CoolMap;
