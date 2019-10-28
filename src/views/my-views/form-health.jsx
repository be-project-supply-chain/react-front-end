import React from "react";
import { Button, Container, Row, Col } from "reactstrap";


import Symptoms from "./symptoms.jsx"
import Hereditary from "./hereditary.jsx"
import Lifestyle from "./lifestyle.jsx"

class FormHealth extends React.Component {

    constructor(props){
      super(props)
    }
    render() {
      return (
        <>
          <section
            className="section section-components pb-0"
            id="section-components"
          >
            <Container >
              <Row className="justify-content-center">
                <Symptoms/>
              </Row>
              <hr/>
              <Row className="justify-content-center">
                <Hereditary/>
              </Row>
            </Container>
            <Lifestyle/>
          </section>
        </>
      );
    }
  }
  


export default FormHealth 