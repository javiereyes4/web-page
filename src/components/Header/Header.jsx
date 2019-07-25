import React from 'react';
import './Header.scss'
import logo from '../../img/png/logo.png'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';

export default class Header extends React.Component {

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return(
      <div className="header">
        <div className="headerMobile">
          <Navbar className="navPosition" color="faded" light>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem className="li-Nav">
                  <NavLink className="linkNav" href="/components/">Nosotros</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="linkNav" href="/components/">Productos</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="linkNav" href="/components/">Bio</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="linkNav" href="/components/">Contactenos</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <img className="logo" src={logo} />
        <div className="textHeader">
          <strong>ALEJANDRO ALONSO G</strong> 
          <strong>BOLSAS PUBLICITARIAS</strong>
        </div>
        <div className="headerDesk">
          <div className="navDesk">
            <ul className="liStyle">
              <li className="liMob">
                <a href="/components/">Nosotros</a>
              </li>
              <li className="liMob">
                <a href="/components/">Productos</a>
              </li>
              <li className="liMob">
                <a href="/components/">Bio</a>
              </li>
              <li className="liMob">
                <a href="/components/">Contactenos</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
