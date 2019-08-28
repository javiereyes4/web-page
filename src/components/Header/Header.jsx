import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/png/logo.png'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import './Header.scss'

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
                    <Link to="/We">Nosotros</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="linkNav" href="/Product">
                    <Link to="/Product">Productos</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="linkNav" href="/Bio">
                    <Link to="/Bio">Bio</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="linkNav" href="/Contact">
                    <Link to="/Contact">Contactenos</Link>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <Link className="linkLogo" to="/Home">
          <img className="logo" src={logo} />
        </Link>
        <div className="textHeader">
          <strong>ALEJANDRO ALONSO G</strong> 
          <strong>BOLSAS PUBLICITARIAS</strong>
        </div>
        <div className="headerDesk">
          <div className="navDesk">
            <ul className="liStyle">
              <li className="liMob">
                <Link style={stylesA} to="/We">Nosotros</Link>
              </li>
              <li className="liMob">
                <Link style={stylesA} to="/Product">Productos</Link>
              </li>
              <li className="liMob">
                <Link style={stylesA} to="/Bio">Bio</Link>
              </li>
              <li className="liMob">
                <Link style={stylesA} to="/Contact">Contactenos</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
