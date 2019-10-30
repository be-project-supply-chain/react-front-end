import React from "react";
import { Button, Container, Row, Col } from "reactstrap";


import Symptoms from "./symptoms.jsx"
import Hereditary from "./hereditary.jsx"
import Lifestyle from "./lifestyle.jsx"
import Output from "./output.jsx"

class FormHealth extends React.Component {

    constructor(props){
      super(props)
      this.state={
          h:new Array(20).fill(0),
          s: [],
          l: new Array(20).fill(-1),
          message:""
        }
      // console.log(this.state.h)
    }


    hcallback = (data) =>{
      this.setState({h:data})
      // console.log("hcallback")
    }
    scallback =(data) =>{
      this.setState({s:data})
    }

    lcallback = (data)=>{
      this.setState({l:data})
    }

    onVerify(){
      console.log(this.state)
      if(this.state.l.includes(-1)){
        alert("you have not filled the lifestyle form")
        this.callApi()
        return
      }
      else{
        // alert("you have filled theform.u may proceed")
        this.callApi()
      }
    }

    callApi(){
      fetch('http://localhost:5000/', {
          method: 'GET',
      }).then(res=>{
        console.log(res)
        res=res.json()
        console.log(res)
        return res
      }).then(data=>{
        console.log(data)
        this.setState({message:data.message})
      })
      .catch(e=>{
        console.log(e)
      })
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
                <Symptoms parentCallback={this.scallback} />
              </Row>
              <hr/>
              <Row className="justify-content-center">
                <Hereditary  parentCallback={this.hcallback} />
              </Row>
            </Container>
            <Lifestyle  parentCallback={this.lcallback}/>
            <Container>
              <Row className="justify-content-center">
                <Button color="info"
                  size="lg"
                  type="button"
                  className="ml-1" 
                  onClick={this.onVerify.bind(this)}>
                      Submit
                </Button>
              </Row>
              <Row className="justify-content-center">
                  <Output m={this.state.message}/>
              </Row>
            </Container>  
          </section>
        </>
      );
    }
  }
  


export default FormHealth 