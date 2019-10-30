import React from "react";
import { Button, Container, Row, Col } from "reactstrap";

class Hereditary extends React.Component {

    constructor(props) {
        super(props);
        this.hinfo= new Array(20).fill(0)
                
        this.hereditary = [
            'Mental illness','Back Pain', 'Stroke', 'Atherosclerosis','Obesity','Cirrhosis','Cancer', 
            'Heart Disease','High Blood Pressure','Type-II Diabetes',"Alzheimer's disease","Arthritis",
            "Asthma","Chronic obstructive pulmonary disease","Metabolic syndrome","Chronic renal failure",
            "Osteoporosis","Swimmer’s ear","Nephritis","Eye Pain"
        ]
        // console.log(this.hinfo)
      }

     handleClick(i) {
        i=Number(i)
        this.hinfo[i] = this.hinfo[i]==0?1:0
        this.sendData()
      }
    sendData =()=>{
      this.props.parentCallback(this.hinfo)
      console.log("sendData")
    }
      
      
    render() {
      return (
        <>
        <Col xs="12" style={{backgroundColor: '#f1f1f1'}}>
            <h3 className="heading-title text-success mb-0">
            Fill up the hereditary imformation
            </h3>
            <h6 className="mb-0"> Do your parents/relatives have any  history of any of the following lifestyle diseases ?</h6>
            <hr></hr>
            
            {
                this.hereditary.map((symptom,index )=> (
                    <Button className="btn-1 ml-1"
                        color={`${this.hinfo[index]==0?"success":"danger"}`}
                        outline
                        type="button"
                        size="sm"
                        value={index}
                        onClick={() => this.handleClick(index)}>{symptom}</Button>
                ))
            }
            
            
        </Col>

        </>
      );
    }
  }
  


export default Hereditary 