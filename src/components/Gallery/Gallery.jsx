import React from 'react';
import ImageGallery from 'react-image-gallery';
import './Gallery.scss'

export default class Gallery extends React.Component {

  render() {

    const { data, autoPlay=true } = this.props;

    console.log(data);

    return (
      <ImageGallery items={data} showThumbnails={false} showFullscreenButton={false} showBullets={true} showPlayButton={false} autoPlay={autoPlay}/>
    );
  }
}
