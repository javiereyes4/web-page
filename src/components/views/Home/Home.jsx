import React from 'react';
import Header from '../../Header/Header';
import Gallery from '../../Gallery/Gallery'
import CardBio from '../../CardBio/CardBio'
import Footer from '../../Footer/Footer'
import inicio from '../../../img/svg/inicio.svg'
import image1 from '../../../img/svg/imagen1.png'
import image2 from '../../../img/svg/imagen2.png'
import image3 from '../../../img/svg/imagen3.png'
import image4 from '../../../img/svg/imagen4.png'

export default class Home extends React.Component {
  render() {

    const gallery = [
      {
        original: image1,
        "description" : "Nos adaptamos a sus necesidades para ofrecer \nel diseño que mejor se adapte a su producto o a sus líneas de productos."
      },
      {
        original: image2,
        "description": "Manejamos la técnica de serigrafía para ofrecer adaptabilidad a las cantidades que pueda solicitar."
      },
      {
        original: image3,
        "description": "Comprometidos con el planeta manejamos plasticos oxo-biodegrables y telas no tejidas (kambrel)."
      },
      {
        original: image4,
        "description": "Atendiendo otro tipo de necesidades ofrecemos la terminación de sus bolsas como impresión, selle, corte, manija o troquel."
      }
    ]

    return(
      <div>
        <Header image={ inicio } colorText="#838383" />
        <div className="gallery galleryHome">
          <Gallery data={gallery} />
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
