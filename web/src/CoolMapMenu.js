import React, { Component } from 'react';

import 'semantic-ui-css/semantic.min.css';
import { Input, Label, Menu } from 'semantic-ui-react'

class CoolMapMenu extends Component {

  state = { activeItem: 'inbox' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleMapToggle = () => {
    this.props.onMapToggle(this.props.mapId)
  };

  render() {
    const { activeItem } = this.state

    const menuOptions = this.props.options.map((option) => (
      <Menu.Item name={option.csv} active={activeItem === option.csv} onClick={this.handleItemClick}>
        <Label color='teal'>1</Label>
        {option.name}
      </Menu.Item>
    ));

    const menu = (
      <Menu vertical>
        {menuOptions}
      </Menu>
    );

    return (
      <div>
        <button onClick={this.handleMapToggle}>Toggle Map</button>
        {menu}
      </div>
    );
  }
}

export default CoolMapMenu;
