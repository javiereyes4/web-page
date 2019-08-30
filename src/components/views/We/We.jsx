import React from 'react';
import Header from '../../Header/Header';
import Gallery from '../../Gallery/Gallery'
import inicio from '../../../img/svg/nosotros.svg'
import Whowearemissionvision from '../../Whoweare-mission-vision/Whoweare-mission-vision'
import datajson from './galleryWe.json'
import './We.scss';

export default class We extends React.Component {
  render() {
    return (
      <div className="containerAll">
        <Header image={ inicio } colorText="#3D6BB6" />

        <div className="gallery">
          <Gallery data={datajson} />
        </div>

        <div>
          <Whowearemissionvision />
        </div>
      </div>
    );
  }
}
