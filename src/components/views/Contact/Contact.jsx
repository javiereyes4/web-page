import React from 'react';
import Header from '../../Header/Header';
import { Button, FormGroup, Label, Input, Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import inicio from '../../../img/svg/contactenos.svg'
import Footer from '../../Footer/Footer'
import './Contact.scss'

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Digite un Nombre';
  }
  if (!values.mail) {
    errors.mail = 'Digite un correo';
  }
  if (!values.messaje) {
    errors.messaje = 'Digite un Mensaje';
  }
  return errors;
}

export default class Contact extends React.Component {

  state = {
    errors: {},
    alertModal: false
  }

  togglealertModal = () => this.setState({ alertModal: !this.state.alertModal });

  modalConfirm = () => (
    <div>
      <Modal isOpen={this.state.alertModal} fade={false} toggle={this.togglealertModal}>
        <ModalBody>
          Correo enviado correctamente, te daremos respuesta lo mas pronto posible.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.togglealertModal}>Aceptar</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  )

  handleChange = ({ target }) => {
    const { name, value } = target
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { errors, ...sinErrors } = this.state
    const result = validate(sinErrors);

    this.setState({ errors: result })
    if (!Object.keys(result).length) {

      fetch(`/api/send?name=${encodeURIComponent(this.state.name)}&mail=${encodeURIComponent(this.state.mail)}&messaje=${encodeURIComponent(this.state.messaje)}`, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function(response) {
        return response.text();
      })
      .then(function(text) {
        console.log('Request successful', text);
      })
      .catch(function(error) {
        console.log('Request failed', error)
      });

      this.togglealertModal();      
    }

    this.setState({
      name: '',
      razon: '',
      tel: '',
      mail: '',
      messaje: '',
    });

  }

  render() {
    const { errors } = this.state;
    const infoModalComponent = this.modalConfirm();
    return (
      <div className="containerAll">
        <Header image={inicio} colorText="#CBBB00" />
        {infoModalComponent}
        <section>
          <Container className="contactContent">
            <Row>
              <Col xs="12" sm="6">
                <form onSubmit={this.handleSubmit}>
                  <Label for="name">Nombre</Label>
                  <Input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
                  {errors.name && <p className="errorMessage" >{errors.name}</p>}
                  <br />
                  <Label for="razon">Razón Social</Label>
                  <Input type="text" name="razon" id="razon" value={this.state.razon} onChange={this.handleChange} />
                  <br />
                  <Label for="tel">Teléfono de contacto</Label>
                  <Input type="text" name="tel" id="tel" value={this.state.tel} onChange={this.handleChange} />
                  <br />
                  <Label for="mail">Dirección de correo electrónico</Label>
                  <Input type="text" name="mail" id="mail" value={this.state.mail} onChange={this.handleChange} />
                  {errors.mail && <p className="errorMessage">{errors.mail}</p>}
                  <br />
                  <Label for="messaje">Escriba su mensaje</Label>
                  <Input type="textarea" name="messaje" id="messaje" value={this.state.messaje} onChange={this.handleChange} />
                  {errors.messaje && <p className="errorMessage">{errors.messaje}</p>}
                  <br />
                  <Button>Enviar</Button>
                </form>
              </Col>
              <Col xs="12" sm="6">
                <div className="contactContentC">
                  <p>Calle 31c sur No 12H-15</p>
                  <p>Gustavo Restrepo</p>
                  <p>Bogotá D. C.</p>
                  <p>Tel.: 2726878</p>
                  <p>cel.: 303 3888254</p>
                  <p>E-mail: bolplas@yahoo.com</p>
                  <p>ventas@aagbolsasplasticas.com.co</p>
                  <a href="www.aagbolsasplasticas.com.co">www.aagbolsasplasticas.com.co</a>
                  <br />
                  <br />
                  <p>Horario de Atención:</p>
                  <p>Lunes a Viernes de 8:00 a 13:00 y 14:00 a 18:00Hrs.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Footer />
        </section>
      </div>
    );
  }
}
