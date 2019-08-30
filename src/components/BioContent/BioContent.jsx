import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import video from '../../video/bioMaq.mp4'
import './BioContent.scss'

export default class Bio extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="12" sm="12">
            <h2 className="tittleBioCont" >Plásticos Oxo-biodegradable</h2>
            <br />
          </Col>
          <Col xs="12" sm="7">
            <p className="justifyText">
              Esta tecnología se emplea desde hace años en todo el mundo. Los productos fabricados con estos aditivos pueden estar sin ningún problema en contacto directo con alimentos y al ser desechado, es amigable con el medio ambiente.
              <br />
              <br />
              <br />
              Los productos fabricados con estos aditivos no causarán ningún daño, después de finalizada su vida útil, y si son desechados se FRAGMENTAN en un período de 12 a 24 meses al ser expues- tos al oxígeno, luz solar, calor y/o estrés mecánico. Posteriormente se BIODEGRADAN en un pe- ríodo de 24 a 36 meses en tierra o en un relleno sanitario en presencia de microorganismos, calor, humedad y oxígeno, descomponiéndose en elementos encontrados en la naturaleza.
            </p>
          </Col>
          <Col xs="12" sm="5">
            <div className="videoBioContent">
              <video src={video} controls />
            </div>
          </Col>
          <Col xs="12" sm="12">
            <br />
            <p className="justifyText">
            La fórmula está diseñada de forma que las bolsas duren el tiempo suficiente para ser recogidas y recicladas en nuevas aplicaciones o darles un segundo uso como bolsas de basura, etc.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
