import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './menu.scss';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: []
    }
  }

  componentDidMount() {
    this.fetchMenu();
  }

  joinClassNames(...args) {
    return args.join(' ');
  }

  fetchMenu() {
    fetch('../../menu-data.json')
      .then(res => res.json())
      .then(menu => {
        const menuData = menu.children.map(menudata => Object.assign(menudata, { submenuOpen: false }));
        this.setState({
          menu: menuData,
        });
      });
  }

  toggleInnerMenu(index) {
    let menuData = this.state.menu;
    menuData[index].submenuOpen = !menuData[index].submenuOpen;
    this.setState({
      menu: menuData,
    })
  }

  render() {
    return (
      <div className={this.props.menuOpen ? "displayed" : "hidden"}>
        <div className="back-drop" onClick={this.props.closeMenu()}>
        </div>
        <nav className="menu-navigation">
          {this.state.menu.map((menudata, index) => (
            <div className="menu-header" key={index}>
              <div onClick={this.toggleInnerMenu.bind(this, index)}>
                {menudata.name}
                <div className="chevron-icon">
                  <FontAwesome name={menudata.submenuOpen ? 'chevron-up' : 'chevron-down'} className="menu-icon" />
                </div>
              </div>
              <div className={this.joinClassNames(menudata.submenuOpen ? 'sub-menu-displayed' : 'sub-menu-hidden', 'sub-menu')}>
                <ul className="menu-inner-list">
                  {menudata.children.map((innerMenu, index) => (
                    <li key={index}>{innerMenu.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </nav>
      </div>
    )
  }
}

export default Menu;
