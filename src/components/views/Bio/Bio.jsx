import React from 'react';
import Header from '../../Header/Header';
import inicio from '../../../img/svg/bio.svg'

export default class Bio extends React.Component {
  render() {
    return (
      <div className="containerAll">
        <Header image={ inicio } colorText="green" />
      </div>
    );
  }
}
