import React from "react"
import {browserHistory, Link} from 'react-router';
import Drawer from "material-ui/Drawer";
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';


export default class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  handleTouchMenu = (e, menuItem) => {
    Helper.transitionTo(menuItem.props.value);
  };

  renderMenuItem(item, transitionTo, icon, isCustomIcon) {
    let isActive;
    isActive = (Helper.getCurrentPath() + '/').search(item + '/') !== -1;
    let menuItemIcon = isCustomIcon ?
      <i className={icon + (isActive ? '-active' : '')}/> :
      <i className="material-icons">{icon}</i>;
    return (
      <MenuItem
        title={item}
        className={'drawer-item ' + (isActive ? 'active-item' : 'normal-item')}
        innerDivStyle={this.props.collapsed ? {} : {paddingLeft: "50px"}}
        primaryText={item}
        leftIcon={menuItemIcon}
        value={transitionTo}
      />
    );
  }

  render() {
    let drawerClass = this.props.collapsed ? 'drawer-close' : 'drawer-open';
    return (
      <div>
        <mui.Drawer open={true} width={190} className="app-drawer">
        <div className={drawerClass}>
          <div className="logo-wrapper pointer">
            <div className="logo" onClick={() => Helper.transitionTo("/")}>
              <img src="/images/logo.png" width="140" height="40"/>
            </div>
          </div>
          <mui.Menu
            onItemTouchTap={this.handleTouchMenu}
            className="default-cursor"
          >
            {this.renderMenuItem('Home','/','home')}
            {this.renderMenuItem('Task','/tasks','work')}
            {this.renderMenuItem('About','/about','favorite')}
          </mui.Menu>
        </div>
      </mui.Drawer>
      </div>
    );
  }
}
