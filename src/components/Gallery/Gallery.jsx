import React from 'react';
import ImageGallery from 'react-image-gallery';
import './Gallery.scss'

export default class Gallery extends React.Component {

  render() {

    const { data } = this.props;

    return (
      <ImageGallery items={data.images} showThumbnails={false} showFullscreenButton={false} showBullets={true} showPlayButton={false} autoPlay={true}/>
    );
  }
}
