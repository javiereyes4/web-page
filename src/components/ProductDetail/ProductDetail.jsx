import React from 'react';
import './ProductDetail.scss'
import { Container, Row, Col } from 'reactstrap';

export default class ProductDetail extends React.Component {

  render() {

    const { position, image, title, colorTitle, tx1, tx2, tx3 } = this.props;
    const styles = { color:colorTitle };

    if( position === 'rigth') {
      return (
        <div className="contentProduct">
          <Container>
            <Row>
              <Col xs="12" sm="12">
                <h3 style={styles}>{title}</h3>
              </Col>
              <Col xs="12" sm="5">
                <img src={image} />
              </Col>
              <Col xs="12" sm="7">
                <p>{tx1}</p>
                <p>{tx2}</p>
                <p>{tx3}</p>
              </Col>
            </Row>
          </Container>
        </div>
      );
    } else if (position === 'left') {
      return (
        <div className="contentProduct">
          <Container>
            <Row>
              <Col xs="12" sm="12">
                <h3 style={styles}>{title}</h3>
              </Col>
              <Col xs="12" sm="7">
                <p>{tx1}</p>
                <p>{tx2}</p>
                <p>{tx3}</p>
              </Col>
              <Col xs="12" sm="5">
                <img src={image} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}
