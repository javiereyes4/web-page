import React from 'react';
import Header from '../../Header/Header';
import BioContent from '../../BioContent/BioContent'
import inicio from '../../../img/svg/bio.svg'
import Footer from '../../Footer/Footer'

export default class Bio extends React.Component {
  render() {
    return (
      <div className="containerAll">
        <Header image={ inicio } colorText="green" />

        <div>
          <BioContent />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
