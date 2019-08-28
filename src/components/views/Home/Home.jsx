import React from 'react';
import Header from '../../Header/Header';
import Gallery from '../../Gallery/Gallery'
import CardBio from '../../CardBio/CardBio'
import Footer from '../../Footer/Footer'
import datajson from '../../data/app.json'
import inicio from '../../../img/svg/inicio.svg'

export default class Home extends React.Component {
  render() {
    return(
      <div>
        <Header image={ inicio } colorText="#838383" />
        <div className="gallery">
          <Gallery data={datajson} />
        </div>
        <div>
          <CardBio />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
} 
