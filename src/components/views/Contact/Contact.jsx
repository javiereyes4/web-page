import React from 'react';
import Header from '../../Header/Header';
import inicio from '../../../img/svg/contactenos.svg'

export default class Contact extends React.Component {
  render() {
    return (
      <div className="containerAll">
        <Header image={ inicio } colorText="#CBBB00" />
      </div>
    );
  }
}