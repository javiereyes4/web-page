import React from 'react';
import Header from '../../Header/Header';
import inicio from '../../../img/svg/productos.svg'

export default class We extends React.Component {
  render() {
    return (
      <div className="containerAll">
        <Header image={ inicio } colorText="#D95618" />
      </div>
    );
  }
}
