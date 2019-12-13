import React from 'react';

import inicio from '../../../img/svg/productos.svg';
import bImage1 from '../../../img/jpg/boutique/1.jpg';
import bImage2 from '../../../img/jpg/boutique/2.jpg';
import bImage3 from '../../../img/jpg/boutique/3.jpg';
import bImage4 from '../../../img/jpg/boutique/4.jpg';
import tImage1 from '../../../img//jpg/tira/2.jpg';
import tImage2 from '../../../img//jpg/tira/bolsatira.jpg';
import tImage3 from '../../../img//jpg/tira/1.png';
import tImage4 from '../../../img//jpg/tira/3.png';
import tImage5 from '../../../img//jpg/tira/4.png';
import cImage1 from '../../../img//jpg/cambre/1.jpg';
import cImage2 from '../../../img//jpg/cambre/2.jpg';
import cImage3 from '../../../img//jpg/cambre/3.jpg';
import cImage4 from '../../../img//jpg/cambre/4.jpg';
import camImage1 from '../../../img//jpg/camiseta/1.jpg';
import camImage2 from '../../../img//jpg/camiseta/2.jpg';
import camImage3 from '../../../img//jpg/camiseta/3.png';
import camImage4 from '../../../img//jpg/camiseta/4.png';
import oImage1 from '../../../img//jpg/ovalo/1.jpg';
import oImage2 from '../../../img//jpg/ovalo/2.jpg';
import oImage3 from '../../../img//jpg/ovalo/3.jpg';
import oImage4 from '../../../img//jpg/ovalo/4.jpg';
import oImage5 from '../../../img//jpg/ovalo/5.jpg';
import oImage6 from '../../../img//jpg/ovalo/6.jpg';
import aroImage1 from '../../../img//jpg/aro/1.jpg';
import aroImage2 from '../../../img//jpg/aro/2.jpg';
import aroImage3 from '../../../img//jpg/aro/3.jpg';
import aroImage4 from '../../../img//jpg/aro/4.png';
import pImage1 from '../../../img//jpg/piramide/1.jpg';
import pImage2 from '../../../img//jpg/piramide/2.jpg';
import rImage1 from '../../../img//jpg/rinon/1.jpg';

import Header from '../../Header/Header';
import ProductDetail from "../../ProductDetail/ProductDetail";
import Footer from '../../Footer/Footer';

export default class We extends React.Component {
  render() {

    const bImage = [
      {
        original: bImage1
      },
      {
        original: bImage2
      },
      {
        original: bImage3
      },
      {
        original: bImage4
      }
    ]

    const tImage = [
      {
        original: tImage1
      },
      {
        original: tImage2
      },
      {
        original: tImage3
      },
      {
        original: tImage4
      },
      {
        original: tImage5
      }
    ]

    const cImage = [
      {
        original: cImage1
      },
      {
        original: cImage2
      },
      {
        original: cImage3
      },
      {
        original: cImage4
      }
    ]

    const camImage = [
      {
        original: camImage1
      },
      {
        original: camImage2
      },
      {
        original: camImage3
      },
      {
        original: camImage4
      }
    ]

    const oImage = [
      {
        original: oImage1
      },
      {
        original: oImage2
      },
      {
        original: oImage3
      },
      {
        original: oImage4
      },
      {
        original: oImage5
      },
      {
        original: oImage6
      }
    ]

    const aroImage = [
      {
        original: aroImage1
      },
      {
        original: aroImage2
      },
      {
        original: aroImage3
      },
      {
        original: aroImage4
      }
    ]

    const pImage = [
      {
        original: pImage1
      },
      {
        original: pImage2
      }
    ]

    const rImage = [
      {
        original: rImage1
      }
    ]
    
    return (
      <div className="containerAll">
        <Header image={ inicio } colorText="#D95618" />

        <div>
          <ProductDetail position="left" image={bImage} title={"BOLSAS TIPO BOUTIQUE"} colorTitle={"#EAD103"} tx1={"Manijas de cordón y remaches metalicos, asa flexible, riñon o troquel y base de cartón."} tx2={"Polietileno de alta densidad, blanco, color o transparente."} tx3={"Impresas: 1 o 2 caras, 1 o más colores."} />
        </div>
        <div>
          <ProductDetail position="rigth" image={tImage} title={"BOLSAS CON ASA FLEXIBLE"} colorTitle={"#EA1C03"} tx1={"Manijas del mismo material."} tx2={"Alta ó baja densidad, blanco, color o transparente."} tx3={"Impresas: 1 o 2 caras, 1 o más colores."} />
        </div>
        <div>
          <ProductDetail position="left" image={cImage} title={"BOLSAS KAMBREL"} colorTitle={"#EC9510"} tx1={"Manijas del mismo material, cordón o troquel ovalo."} tx2={"Kambrel blanco o color."} tx3={"Impresas: 1 o 2 caras, 1 o más colores."} />
        </div>
        <div>
          <ProductDetail position="rigth" image={camImage} title={"BOLSAS CAMISETA"} colorTitle={"#C534FF"} tx1={"Fuelles laterales que forman manijas."} tx2={"Alta o baja densidad, blanco, color o transparente."} tx3={"Impresas: 1 o 2 caras, 1 o más colores."} />
        </div>
        <div>
          <ProductDetail position="left" image={oImage} title={"BOLSAS TROQUEL OVALO"} colorTitle={"#346EFF"} tx1={"Manijas troqueladas sobre el mismo material."} tx2={"Alta o baja densidad, blanco, color o transparente."} tx3={"Impresas: 1 o 2 caras, 1 o más colores."} />
        </div>
        <div>
          <ProductDetail position="rigth" image={aroImage} title={"BOLSAS CON MANIJA ARO"} colorTitle={"#00AF00"} tx1={"Manijas plasticas rígidas."} tx2={"Material de alta o baja densidad, blanco, color o transparente."} tx3={"Impresas: 1 o 2 caras, 1 o más colores."} />
        </div>
        <div>
          <ProductDetail position="left" image={pImage} title={"BOLSAS CON MANIJA PIRAMIDE"} colorTitle={"#F58B13"} tx1={"Manijas plasticas rígidas."} tx2={"Material de alta o baja densidad, blanco, color o transparente."} tx3={"Impresas: 1 o 2 caras, 1 o más colores."} />
        </div>
        <div>
          <ProductDetail position="rigth" image={rImage} title={"BOLSAS CON MANIJA RIÑONE"} colorTitle={"#F52FC5"} tx1={"Manijas plasticas rígidas sobrepuesta en el troquel ovalo."} tx2={"Alta o baja densidad, blanco, color o transparente."} tx3={"Impresas: 1 o 2 caras, 1 o más colores."} />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
