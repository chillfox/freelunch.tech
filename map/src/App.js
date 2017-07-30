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
      center: [-12.42283024081249, 130.8456],
      zoom: 13,
    },
    markers: [],
    dataSets: [],
    activeDataSet: "",
    // dataUrl: "/leaflet_map/",
    dataUrl: "/"
  };

  componentDidMount() {
    Papa.parse(this.state.dataUrl + "FilenameKey.csv", {
      download: true,
      header: true,
      complete: function(results) {
        // console.log(results)
        this.setState({dataSets: results.data});
      }.bind(this)
    });

    // this.setState({
    //   mapId: "street",
    //   mapUrl: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    //   position: [-12.4634, 130.8456],
    // });
  }

  fetchDataSet(dataSetName) {
    const url = this.state.dataUrl + "csvOut/" + dataSetName + ".csv"
    Papa.parse(url, {
      download: true,
      header: true,
      complete: function(results) {
        console.log(results)
        this.setState({markers: results.data});
      }.bind(this)
    });
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

  handleOptionClick = (activeOption) => {
    // console.log(activeOption)
    if (this.state.activeDataSet === activeOption) {
      this.setState({markers: [], activeDataSet: ""})
    } else {
      this.setState({markers: [], activeDataSet: activeOption})
      this.fetchDataSet(activeOption)
    }

  };

  render() {
    return (
      <div className="App">
        <CoolMap
          className="CoolMap"
          key={this.state.mapId + "_" + this.state.activeDataSet}
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
          activeOption={this.state.activeDataSet}
          handleOptionClick={this.handleOptionClick}
        />
      </div>
    );
  }
}

export default App;
