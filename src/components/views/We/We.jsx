import React from 'react';
import Header from '../../Header/Header';
import inicio from '../../../img/svg/nosotros.svg'
import './We.scss';

export default class We extends React.Component {
  render() {
    return (
      <div className="containerAll">
        <Header image={ inicio } colorText="#3D6BB6" />
      </div>
    );
  }
}
