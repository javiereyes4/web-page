import React from 'react';
import Header from '../../Header/Header';
import { Button, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
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
    errors: {}
  }

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
      console.log("Formulario valido, se puede envíar");
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="containerAll">
        <Header image={ inicio } colorText="#CBBB00" />

        <section>
        <Container className="contactContent">
            <Row>
              <Col xs="12" sm="6">
                <form onSubmit={this.handleSubmit}>
                  <Label for="name">Nombre</Label>
                  <Input type="text" name="name" id="name" onChange={this.handleChange} />
                  {errors.name && <p className="errorMessage" >{errors.name}</p>}
                  <br />
                  <Label for="razon">Razón Social</Label>
                  <Input type="text" name="razon" id="razon" onChange={this.handleChange} />
                  <br />
                  <Label for="tel">Teléfono de contacto</Label>
                  <Input type="text" name="tel" id="tel" onChange={this.handleChange} />
                  <br />
                  <Label for="mail">Dirección de correo electrónico</Label>
                  <Input type="text" name="mail" id="mail" onChange={this.handleChange} />
                  {errors.mail && <p className="errorMessage">{errors.mail}</p>}
                  <br />
                  <Label for="messaje">Escriba su mensaje</Label>
                  <Input type="textarea" name="messaje" id="messaje" />
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
