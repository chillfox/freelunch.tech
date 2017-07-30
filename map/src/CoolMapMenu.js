import React, { Component } from 'react';

import 'semantic-ui-css/semantic.min.css';
import { Button, Label, Menu } from 'semantic-ui-react'

import './CoolMapMenu.css'

class CoolMapMenu extends Component {

  // state = { activeItem: 'none' }

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleItemClick = (e, { name }) => this.props.handleOptionClick( name );

  handleMapToggle = () => {
    this.props.onMapToggle(this.props.mapId)
  };

  render() {
    // const { activeItem } = this.state

    const menuOptions = this.props.options.map((option) => (
      <Menu.Item
        key={option.Filename}
        id={option.Filename}
        name={option.Filename}
        active={this.props.activeOption === option.Filename}
        onClick={this.handleItemClick}
        fluid
      >
        <Label color='blue'>{option.Instances}</Label>
        {option.DisplayName}
      </Menu.Item>
    ));

    const menu = (
      <Menu vertical fluid>
        {menuOptions}
      </Menu>
    );

    return (
      <div>
        {/*<button onClick={this.handleMapToggle}>Toggle Map</button>*/}
        <Button
          fluid
          primary
          onClick={this.handleMapToggle}
        >
          Satelite / Street
        </Button>
        <div
          className="MapMenu"
          fluid
        >
          {menu}
        </div>
      </div>
    );
  }
}

export default CoolMapMenu;
