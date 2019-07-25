import React from 'react';
import './CardBio.scss'
import bio from '../../img/svg/bio.svg'
import video from '../../video/bioMaq.mp4'

export default class Header extends React.Component {
  render() {
    return(
      <div className="cardBioDesk">
        <img className="bioImage" src={bio}/>
        <div className="videoBio">
          <video src={video} controls/>
        </div>
      </div>
    )
  }
} 
