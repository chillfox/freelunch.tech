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

  // onViewportChanged = viewport => {
  //   // console.log(viewport);
  //   this.props.onViewportChanged(viewport)
  // };

  // onClickReset = () => {
  //   // this.setState({ viewport: DEFAULT_VIEWPORT })
  //   this.props.onClickReset()
  // };

  render() {
    // const position = this.props.position;

    const myicon = L.icon({
      iconUrl: markerIcon,
      iconSize: [35, 45],
      iconAnchor: [17, 42],
      popupAnchor: [1, -32],
      shadowUrl: markerShadow,
      shadowSize: [36, 16],
      shadowAnchor: [10, 12]
    });

    const markers = this.props.markers.map((marker) => (
      <Marker
        key={marker.key}
        id={marker.key}
        position={[marker.Latitude, marker.Longitude]}
        icon={myicon}
      >
        <Popup>
          <span>
            {marker.Name}
          </span>
        </Popup>
      </Marker>
    ));

    return (
      <Map
        // center={this.props.position}
        // zoom={this.props.zoom}
        // onClick={this.onClickReset}
        // onViewportChanged={this.onViewportChanged}
        viewport={this.props.viewport}>
      >
        <TileLayer
          url={this.props.url}
          // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {this.props.markers.length ? markers : ""}
      </Map>
    );
  }
}

export default CoolMap;
