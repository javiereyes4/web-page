import React from 'react';
import Header from '../../Header/Header';
import Gallery from '../../Gallery/Gallery'
import Footer from '../../Footer/Footer'
import inicio from '../../../img/svg/nosotros.svg'
import Whowearemissionvision from '../../Whoweare-mission-vision/Whoweare-mission-vision'
import './We.scss';
import image1 from '../../../img/svg/impresora.jpg'
import image2 from '../../../img/svg/manija.jpg'
import image3 from '../../../img/svg/maquina.jpg'
import image4 from '../../../img/svg/maquina2.jpg'

export default class We extends React.Component {
  render() {

    const gallery = [
      {
        original: image1
      },
      {
        original: image2
      },
      {
        original: image3
      },
      {
        original: image4
      }
    ]

    return (
      <div className="containerAll">
        <Header image={ inicio } colorText="#3D6BB6" />

        <div className="gallery">
          <Gallery data={gallery} />
        </div>

        <div>
          <Whowearemissionvision />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
