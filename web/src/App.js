import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CoolMap from './CoolMap';
import CoolMapMenu from './CoolMapMenu'

class App extends Component {
  state = {
    mapUrl: ""
  };

  componentDidMount() {
    this.setState({
      mapId: "street",
      mapUrl: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
    });
  }

  handleMapToggle = (mapId) => {
    // console.log(mapId);
    // console.log('toggle map');

    let id = "";
    let url = "";
    // http://{s}.tile.osm.org/{z}/{x}/{y}.png

    if (mapId === "street") {
      id = "satelite";
      url = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";
    } else {
      id = "street";
      url = "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png";
    }

    this.setState({
      mapId: id,
      mapUrl: url
    });
  };

  render() {
    return (
      <div className="App">
        {/*<div className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h2>Welcome to React</h2>*/}
        {/*</div>*/}
        {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        <CoolMap
          id={this.state.mapId}
          url={this.state.mapUrl}
        />
        <CoolMapMenu
          mapId={this.state.mapId}
          onMapToggle={this.handleMapToggle}
        />
      </div>
    );
  }
}

export default App;
