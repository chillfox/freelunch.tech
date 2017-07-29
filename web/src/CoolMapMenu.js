import React, { Component } from 'react';

class CoolMapMenu extends Component {
  handleMapToggle = () => {
    this.props.onMapToggle(this.props.mapId)
  };

  render() {
    return (
      <button onClick={this.handleMapToggle}>Toggle Map</button>
    );
  }
}

export default CoolMapMenu;
