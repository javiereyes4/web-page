import React from 'react';
import ImageGallery from 'react-image-gallery';
import image1 from '../../img/jpg/image1.png'
import image2 from '../../img/jpg/image2.jpg'
import image3 from '../../img/jpg/image3.jpg'
import image4 from '../../img/jpg/image4.jpg'

export default class Gallery extends React.Component {

  render() {

    const images = [
      {
        original: image1
        // thumbnail: 'http://lorempixel.com/250/150/nature/1/'
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
      <ImageGallery items={images} showThumbnails={false} showFullscreenButton={false} showBullets={true} showPlayButton={false} autoPlay={true}/>
    );
  }
}
