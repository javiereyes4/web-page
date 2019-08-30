import React from 'react';
import manija from '../../img/jpg/manija2.jpg'
import troqueladora from '../../img/jpg/troqueladora.jpg'
import { Container, Row, Col } from 'reactstrap';

import './Whoweare-mission-vision.scss'

export default class Whowearemissionvision extends React.Component {
  render() {
    return (
      <Container className="contentWe">
        <Row>
           <Col xs="12" sm="12" className="alignItems">
            <h2 className="titleText">¿Quienes Somos?</h2>
            <div>
              <p className="justifyText">
                Somos una empresa productora de bolsas biodegradables en plástico y kambrel. Fundada desde 1982, en esta trayectoria nos hemos caracterizado por mantener unos parámetros de calidad, honradez y cumplimiento.
                <br />
                <br />
              </p>
            </div>
          </Col>
          <Col xs="12" sm="6" className="alignItems">
            <h2 className="titleText">Nuestra Misión</h2>
            <p className="justifyText">
              Producir bolsa impresa de excelente calidad dando publicidad y satisfacción a nuestros clientes, seguridad y bienestar a nuestros colaboradores, progreso empresarial y generación de empleo.
            </p>
            <img src={ manija } className="imgMision" />
          </Col>
          <Col xs="12" sm="6" className="alignItems">
            <img src={ troqueladora } className="imgVision" />
            <h2 className="titleText">Nuestra Visón</h2>
            <p className="justifyText">
              Ser lideres en las soluciones a las exigencias de las pequeñas cantidades de bolsa impresa y poderles ofrecer a nuestros clientes  todo tipo de bolsas existentes en el mercado, siempre a los mejores costos.
              <br />
              <br />
              Mantenernos constantemente innovando nuestros productos y seguir mejorando nuestros procesos.
              <br />
              <br />
              Seguir en la búsqueda de que nuestro producto sea totalmente biodegradable en tiempo récor.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
