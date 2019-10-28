import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { RadioGroup, RadioButton ,ReversedRadioButton } from 'react-radio-buttons';

class Lifestyle extends React.Component {

    constructor(props) {
        super(props);
        this.i=0
        
        
        this.lifestyle = [
            {
                title : "How much do you walk in a day?",
                options : [
                  {name:"Less than 30 minutes",value:1},
                  {name:"30 minutes",value:2},
                  {name:"30-40 minutes",value:3},
                  {name:"1 Hour",value:4},
                  {name:"More than 1 hour",value:5}
                ]
            },{
                title : "Do you walk to the workplace?",
                options :  [
                  {name:"yes",value:1},{name:"no",value:0}]
            },{
                title : "Do you Smoke?",
                options : [
                  {name:"Daily",value:1},
                  {name:"3-4 Days in a week",value:2},
                  {name:"Occasionally",value:3 },
                  {name:"No, I don't smoke",value:4}
                
                ]
            },{
                title : "Do you drink alcohol?",
                options :[
                  {name:"Daily",value:1},
                  {name:"3-4 Days in a week",value:2},
                  {name:"Occasionally",value:3 },
                  {name:"No, I don't drink",value:4}
                
                ] 
            },{
                title : "How many hours in a day you sit?",
                options : [
                  {name:"More than 10 hours",value:1},
                  {name:"10 hours",value:2},
                  {name:"9 hours",value:3},
                  {name:"8 hours",value:4,},
                  {name:"less than 8 hours",value:5}
                ]
            },{
                title : "Do you sit straight?",
                options : [{name:"yes",value:1},{name:"no",value:0}]
            },{
                title : "Do you walk to the workplace?",
                options : [{name:"yes",value:1},{name:"no",value:0}]
            },{
                title : " How many hours in a day do you sit in front of computer?",
                options : [
                  {name:"More than 12 hours",value:1},
                  {name:"12 hours",value:2},
                  {name:"8 hours",value:3},
                  {name:"less than 8 hours",value:4},
                  {name:"No, I don't sit",value:5} 
                ]
            },{
                title : " Do you go for a walk after lunch or dinner?",
                options : [{name:"yes",value:1},{name:"no",value:0}]
            }
        ]
        this.state={
          linfo: new Array(this.lifestyle.length).fill(-1)
        }
      }

      handleClick(i,value){
        this.state.linfo[i]=value
        this.forceUpdate()
        // console.log(this.state.linfo)
      }


    render() {


      return (
          <section
            className="section section-components pb-0"
            id="section-components">

            <Container style={{backgroundColor: '#f1f1f1'}} >
                <Row><Col xs="12" >
                <h3 className="heading-title text-success mb-0">
                    Let's quickly take a lifestyle survey!!
                </h3>
                <hr/>
                </Col></Row>

                {
                  this.lifestyle.map((life,index) => (                      
                      <Row>
                        <Col xs="4" >
                          <small className="text-uppercase font-weight-bold">{life.title}</small>
                        </Col>
                        <Col xs="8">
                          
                    {
                      life.options.map(option => (
                        <Button className="btn-1 ml-1"
                        color={`${this.state.linfo[index]===option.value?"warning":"primary"}`}
                        outline
                        type="button"
                        size="sm"
                        onClick={() => this.handleClick(index,option.value)}>{option.name}</Button>
                      ))
                      }   
                      </Col>
                      </Row>
                                          

                          
                  ))
              }
              
            </Container>
          </section>

      );
    }
  }
  


export default Lifestyle 