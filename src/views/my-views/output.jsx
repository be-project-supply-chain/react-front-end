import React from "react";
import { Button, Container, Row, Col } from "reactstrap";

const Output = ({m})=>{

    if(m==""){
        return (
            <Col xs="12" style={{backgroundColor: '#f1f1f1'}}>
            <h2>Please fill the form to see output</h2>
        </Col>
        )
    }else{
        return (
            <>
            <Col xs="12" style={{backgroundColor: '#f1f1f1'}}>
                <h1>Output</h1> 
                <h2>{m}</h2>
            </Col>
    
            </>
          );
    }
      
  }
  


export default Output; 