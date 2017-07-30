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
        key={option.Filename + option.Instances}
        id={option.Filename}
        name={option.Filename}
        active={this.props.activeOption === option.Filename}
        onClick={this.handleItemClick}
      >
        <Label color='blue'>{option.Instances}</Label>
        {option.DisplayName}<br/>
      </Menu.Item>
    ));

    const menu = (
      <Menu vertical fluid attached>
        {menuOptions}
      </Menu>
    );

    return (
      <div
        className="MapMenu"
      >
        <Button
          fluid
          primary
          onClick={this.handleMapToggle}
        >
          Satelite / Street
        </Button>
        {menu}
      </div>
    );
  }
}

export default CoolMapMenu;
