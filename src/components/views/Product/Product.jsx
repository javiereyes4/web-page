import React from 'react';
import Header from '../../Header/Header';
import inicio from '../../../img/svg/productos.svg'
import ProductDetail from "../../ProductDetail/ProductDetail";
import Footer from '../../Footer/Footer';

export default class We extends React.Component {
  render() {
    return (
      <div className="containerAll">
        <Header image={ inicio } colorText="#D95618" />

        <div>
          <ProductDetail position="left" image={inicio} title={"BOLSAS TIPO BOUTIQUE"} colorTitle={"#EAD103"} tx1={"Manijas de cordón y remaches metalicos, asa flexible, riñon o troquel y base de cartón."} tx2={"Polietileno de alta densidad, blanco, color o transparente."} tx3={"Impresas: 1 o 2 caras, 1 o más colores."} />
        </div>
        <div>
          <ProductDetail position="rigth" image={inicio} title={"BOLSAS CON ASA FLEXIBLE"} colorTitle={"#EA1C03"} tx1={"Manijas del mismo material."} tx2={"Alta ó baja densidad, blanco, color o transparente."} tx3={"Impresas: 1 o 2 caras, 1 o más colores."} />
        </div>
        <div>
          <ProductDetail position="left" image={inicio} title={"BOLSAS KAMBREL"} colorTitle={"#EC9510"} tx1={"Manijas del mismo material, cordón o troquel ovalo."} tx2={"Kambrel blanco o color."} tx3={"Impresas: 1 o 2 caras, 1 o más colores."} />
        </div>
        <div>
          <ProductDetail position="rigth" image={inicio} title={"BOLSAS CAMISETA"} colorTitle={"#C534FF"} tx1={"Fuelles laterales que forman manijas."} tx2={"Alta o baja densidad, blanco, color o transparente."} tx3={"Impresas: 1 o 2 caras, 1 o más colores."} />
        </div>
        <div>
          <ProductDetail position="left" image={inicio} title={"BOLSAS TROQUEL OVALO"} colorTitle={"#346EFF"} tx1={"Manijas troqueladas sobre el mismo material."} tx2={"Alta o baja densidad, blanco, color o transparente."} tx3={"Impresas: 1 o 2 caras, 1 o más colores."} />
        </div>
        <div>
          <ProductDetail position="rigth" image={inicio} title={"BOLSAS CON MANIJA ARO"} colorTitle={"#00AF00"} tx1={"Manijas plasticas rígidas."} tx2={"Material de alta o baja densidad, blanco, color o transparente."} tx3={"Impresas: 1 o 2 caras, 1 o más colores."} />
        </div>
        <div>
          <ProductDetail position="left" image={inicio} title={"BOLSAS CON MANIJA PIRAMIDE"} colorTitle={"#F58B13"} tx1={"Manijas plasticas rígidas."} tx2={"Material de alta o baja densidad, blanco, color o transparente."} tx3={"Impresas: 1 o 2 caras, 1 o más colores."} />
        </div>
        <div>
          <ProductDetail position="rigth" image={inicio} title={"BOLSAS CON MANIJA RIÑONE"} colorTitle={"#F52FC5"} tx1={"Manijas plasticas rígidas sobrepuesta en el troquel ovalo."} tx2={"Alta o baja densidad, blanco, color o transparente."} tx3={"Impresas: 1 o 2 caras, 1 o más colores."} />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
