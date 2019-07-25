import React from 'react';
import './Footer.scss'

export default class Header extends React.Component {

  render() {
    return(
      <div className="footerContainer">
        <div className="fooMob">
          <div className="textGoup1">
            <strong>Calle 31C sur No. 12H-15</strong>
            <strong>Gustavo Restrepo</strong>
            <strong>Bogotá D. C.</strong>
          </div>
          <div className="textGoup2">
            <strong>Tel.: (1)2726878</strong>
            <strong>Cel.: 303 3888254</strong>
          </div>
          <div className="textGoup1">
            <strong>E-mail: bolplas@yahoo.com</strong>
            <strong>ventas@aagbolsasplsaticas.com.co</strong>
            <strong>www.aagbolsasplasticas.com.co</strong>
          </div>
        </div>
        <div className="fooDesk">
          <div className="textGoup1">
            <strong>Calle 31C sur No. 12H-15</strong>
            <strong>Gustavo Restrepo</strong>
            <strong>Bogotá D. C.</strong>
          </div>
          <div className="textGoup1">
            <strong>E-mail: bolplas@yahoo.com</strong>
            <strong>ventas@aagbolsasplsaticas.com.co</strong>
            <strong>www.aagbolsasplasticas.com.co</strong>
          </div>
          <div className="textGoup1">
            <strong>Tel.: (1)2726878</strong>
            <strong>Cel.: 303 3888254</strong>
          </div>
        </div>
      </div>
    )
  }
}
