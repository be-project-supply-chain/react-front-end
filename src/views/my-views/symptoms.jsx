import React, { useState } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import _ from 'lodash';


class Symptoms extends React.Component {

    constructor(props) {
        super(props);
        
        this.state={
          sinfo: []
        }

        this.symptoms = [
    'abdominal_pain','abnormal_menstruation','acidity',
    'acute_liver_failure','altered_sensorium','anxiety','back_pain','belly_pain',
    'blackheads','bladder_discomfort','blister','blood_in_sputum','bloody_stool',
    'blurred_and_distorted_vision','breathlessness','brittle_nails','bruising',
    'burning_micturition','chest_pain','chills','cold_hands_and_feets','coma',
    'congestion','constipation','continuous_feel_of_urine','continuous_sneezing',
    'cough','cramps','dark_urine','dehydration','depression','diarrhoea','dischromic _patches',
    'distention_of_abdomen','dizziness','drying_and_tingling_lips','enlarged_thyroid','excessive_hunger',
    'extra_marital_contacts','family_history','fast_heart_rate','fatigue','fluid_overload',
    'fluid_overload.1','foul_smell_of urine','headache','high_fever','hip_joint_pain',
    'history_of_alcohol_consumption','increased_appetite','indigestion','inflammatory_nails',
    'internal_itching','irregular_sugar_level','irritability','irritation_in_anus','itching',
    'joint_pain','knee_pain','lack_of_concentration','lethargy','loss_of_appetite','loss_of_balance',
    'loss_of_smell','malaise','mild_fever','mood_swings','movement_stiffness','mucoid_sputum',
    'muscle_pain','muscle_wasting','muscle_weakness','nausea','neck_pain','nodal_skin_eruptions',
    'obesity','pain_behind_the_eyes','pain_during_bowel_movements','pain_in_anal_region','painful_walking',
    'palpitations','passage_of_gases','patches_in_throat','phlegm','polyuria','prominent_veins_on_calf',
    'puffy_face_and_eyes','pus_filled_pimples','receiving_blood_transfusion','receiving_unsterile_injections',
    'red_sore_around_nose','red_spots_over_body','redness_of_eyes','restlessness','runny_nose','rusty_sputum',
    'scurring','shivering','silver_like_dusting','sinus_pressure','skin_peeling','skin_rash',
    'slurred_speech','small_dents_in_nails','spinning_movements','spotting_ urination','stiff_neck',
    'stomach_bleeding','stomach_pain','sunken_eyes','sweating','swelled_lymph_nodes',
    'swelling_joints','swelling_of_stomach','swollen_blood_vessels',
    'swollen_extremeties','swollen_legs','throat_irritation',
    'toxic_look_(typhos)','ulcers_on_tongue','unsteadiness','visual_disturbances','vomiting',
    'watering_from_eyes','weakness_in_limbs',
    'weakness_of_one_body_side','weight_gain','weight_loss',
    'yellow_crust_ooze','yellow_urine','yellowing_of_eyes','yellowish_skin'
        ];

        // console.log(this.symptoms.length)
      }

      handleClick(symptom){
        if(this.state.sinfo.includes(symptom)){
          _.remove(this.state.sinfo, function(n) {
            return n === symptom;
          })
          this.forceUpdate()
          console.log(this.state.sinfo)
        }else{
          this.state.sinfo.push(symptom)
          this.forceUpdate()
          console.log(this.state.sinfo)

        }

      }
      
      
      
    render() {
      return (
        <>
        <Col xs="12" style={{backgroundColor: '#f1f1f1'}}>
            <h3 className="heading-title text-danger mb-0">
                Fill Up The Suitable Symptoms
            </h3>
            <h6 className="mb-0"> Select Symptoms  from the following list:</h6>
            <hr></hr>
            {
                this.symptoms.map((symptom,index) => (
                    <Button className="btn-1 ml-1"
                        color={`${this.state.sinfo.includes(symptom)?"success":"danger"}`}
                        outline
                        type="button"
                        size="sm"
                        value={symptom}
                        onClick={() => this.handleClick(symptom)}>{symptom}</Button>
                ))
            }
            
            
        </Col>
        </>
      );
    }
  }
  


export default Symptoms 