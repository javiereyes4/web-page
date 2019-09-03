import React from 'react';
import './ProductDetail.scss';
import Gallery from '../Gallery/Gallery';
import { Container, Row, Col } from 'reactstrap';

export default class ProductDetail extends React.Component {

  render() {

    const { position, image, title, colorTitle, tx1, tx2, tx3 } = this.props;
    const styles = { color:colorTitle };

    console.log(image);

    if( position === 'rigth') {
      return (
        <div className="contentProduct">
          <Container>
            <Row>
              <Col xs="12" sm="12">
                <h3 style={styles}>{title}</h3>
              </Col>
              <Col xs="12" sm="5">
                <div className="galleryProduct">
                  <Gallery data={image} autoPlay={false} />
                </div>
              </Col>
              <Col className="descriptionProduct" xs="12" sm="7">
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
              <Col className="descriptionProduct" xs="12" sm="7">
                <p>{tx1}</p>
                <p>{tx2}</p>
                <p>{tx3}</p>
              </Col>
              <Col xs="12" sm="5">
                <div className="galleryProduct">
                  <Gallery data={image} autoPlay={false} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}
