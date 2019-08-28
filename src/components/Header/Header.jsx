import React from 'react';
import { withRouter } from 'react-router-dom';
import './Header.scss'
import logo from '../../img/png/logo.png'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends React.Component {

  constructor(props) {
    super(props);
    
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
    this.routeChange = this.routeChange.bind(this);
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  routeChange() {
    let path = `Home`;
    this.props.history.push(path);
  }

  render() {
    const { image, colorText } = this.props;
    const styles = { backgroundImage: 'url('+ image +')' }
    const stylesA = { color: colorText }
    
    
    return(
      <div className="header" style={styles}>
        <div className="headerMobile">
          <Navbar className="navPosition" color="faded" light>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem className="li-Nav">
                  <NavLink className="linkNav">
                    <NavLink className="linkNav" href="/We">Nosotros</NavLink>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="linkNav" href="/Product">Productos</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="linkNav" href="/Bio">Bio</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="linkNav" href="/Contact">Contactenos</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <img className="logo" src={logo} onClick={this.routeChange} />
        <div className="textHeader">
          <strong>ALEJANDRO ALONSO G</strong> 
          <strong>BOLSAS PUBLICITARIAS</strong>
        </div>
        <div className="headerDesk">
          <div className="navDesk">
            <ul className="liStyle">
              <li className="liMob">
                <a style={stylesA} href="/we">Nosotros</a>
              </li>
              <li className="liMob">
                <a style={stylesA} href="/Product">Productos</a>
              </li>
              <li className="liMob">
                <a style={stylesA} href="/Bio">Bio</a>
              </li>
              <li className="liMob">
                <a style={stylesA} href="/Contact">Contactenos</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header);
