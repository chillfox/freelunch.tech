import React, { Component } from 'react';
import './App.css';
import CoolMap from './CoolMap';
import CoolMapMenu from './CoolMapMenu'
import Papa from 'papaparse';

class App extends Component {
  state = {
    mapId: "street",
    mapUrl: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    // position: [-12.4634, 130.8456],
    // zoom: 13,
    viewport: {
      center: [-12.4634, 130.8456],
      zoom: 13,
    },
    markers: [],
    dataSets: [
      {name: "BBQ", csv: "BBX"},
      {name: "Fountains", csv: "Fountains"},
      {name: "Picnic Tables", csv: "PicnicTables"},
    ]
  };

  componentDidMount() {
    Papa.parse("http://localhost:3000/csvOut/BBQ.csv", {
      download: true,
      header: true,
      complete: function(results) {
        // console.log(results)
        this.setState({markers: results.data});
      }.bind(this)
    });

    // this.setState({
    //   mapId: "street",
    //   mapUrl: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    //   position: [-12.4634, 130.8456],
    // });
  }



  handleMapToggle = (mapId) => {
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

  // onViewportChanged = viewport => {
  //   this.setState({viewport: viewport})
  // };
  //
  // onClickReset = () => {
  //   this.setState({ viewport: this.state.DEFAULT_VIEWPORT })
  // };

  render() {
    return (
      <div className="App">
        <CoolMap
          className="CoolMap"
          key={this.state.mapId}
          id={this.state.mapId}
          url={this.state.mapUrl}
          // position={this.state.position}
          // zoom={this.state.zoom}
          viewport={this.state.viewport}
          // onViewportChanged={this.onViewportChanged}
          // onClickReset={this.onClickReset}
          markers={this.state.markers}
        />
        <CoolMapMenu
          className="CoolMapMenu"
          mapId={this.state.mapId}
          onMapToggle={this.handleMapToggle}
          options={this.state.dataSets}
        />
      </div>
    );
  }
}

export default App;
