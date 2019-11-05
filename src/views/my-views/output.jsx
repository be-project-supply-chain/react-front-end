import React from "react";
import { Button, Container, Row, Col } from "reactstrap";

const Dtreatment = [
    {
         
        Disease : "Mental illness",
        treatments : ["Don't skip therapy sessions", "Don't skip your medications.",
                        "If you have bothersome drug side effects or other problems with treatment, talk to your doctor before making changes", "Learn to adopt a positive attitude. Focusing on the positive things in your life can make your life better and may even improve your health. Try to accept changes when they occur, and keep problems in perspective. Stress management techniques, including relaxation methods, may help ","Avoid alcohol and drug use. Using alcohol or recreational drugs can make it difficult to treat a mental illness. " ,
                        "Stay active. Exercise can help you manage symptoms of depression, stress and anxiety. Physical activity can also counteract the effects of some psychiatric medications that may cause weight gain. Consider walking, swimming, gardening or any form of physical activity that you enjoy. Even light physical activity can make a difference" , "Don't make important decisions when your symptoms are severe Avoid decision-making when you're in the depth of mental illness symptoms, since you may not be thinking clearly.","Determine priorities. You may reduce the impact of your mental illness by managing time and energy. Cut back on obligations when necessary and set reasonable goals. Give yourself permission to do less when symptoms are worse."
        ]
    },{
         
        Disease : "Back Pain",
        treatments : [  "Regular low-impact aerobic activities those that don't strain or jolt your back-can increase strength and endurance in your back and allow your muscles to function better. Walking and swimming are good choices. Talk with your doctor about which activities are best for you",
                        "Build muscle strength and flexibility. Abdominal and back muscle exercises (core.strengthening exercises) help condition these muscles so that they work together like a natural corset for your back. Flexibility in your hips and upper legs aligns your pelvic bones to improve how your back feels. Your doctor or physical therapist can tell which exercises are right for you",
                        "Maintain a healthy weight. Being overweight strains back muscles. If you're overweight, trimming down can prevent back pain.",
                        "If you must stand for long periods, place one foot on a low footstool to take some of the load off your lower back. Alternate feet. Good posture can reduce the stress on back muscles.",
                        "Sit smart. Choose a seat with good lower back support, armrests and a swivel base. Consider placing a pillow or rolled towel in the small of your back to maintain its normal curve. Keep your knees and hips level Change your position frequently, at least every half-hour.",
                        "Lift smart. Avoid heavy lifting, if possible, but if you must lift something heavy, let your legs do the work. Keep your back straight no twisting and bend only at the knees. Hold the load close to your body. Find a lifting partner if the object is heavy or awkward"]
     
     },{
         
        Disease : "Stroke",
        treatments : [  " Wear loose fitting, lightweight clothing. Wearing excess clothing or clothing that fits tightly won't allow your body to cool properly.",
                        "Protect against sunburn. Sunburn affects your body's ability to cool itself, so protect yourself outdoors with a wide-brimmed hat and sunglasses and use a broad-spectrum sunscreen with an SPF of at least 15. Apply sunscreen generously, and reapply every two hours or more often if you're swimming or sweating.",
                        "Drink plenty of fluids. Staying hydrated will help your body sweat andmaintain a normal body temperature.",
                        "Take it easy during the hottest parts of the day. If you can't avoid strenuous activity in hot weather, drink fluids and rest frequently in a cool spot. Try to schedule exercise or physical labor for cooler parts of the day, such as early morning or evening.",
                        "Get acclimated. Limit time spent working or exercising in heat until you are conditioned to it. People who are not used to hot weather are especially susceptible to heat-related illness. It can take several weeks for your body to adjust to hot weather."]
     
     },{
         
        Disease : "atherosclerosis",
        treatments : [
            "Stop smoking. Smoking damages your arteries If you smoke or se tobacco in any form.quitting is the best way to halt the progression atherosclerosis and reduce your risk of complications.",
            "Ideally you should exercise 30 to 60 minutes most days of the week. If you cant fit it all into one session, try breaking it up into 10-minute intervals You can take the stairs instead of the elevator, walk around the block during your lunch hour or do some situps pushups while watching television",
            "Eat healthy foods. A heart healthy diet based on fruits, vegetables and whole grains and low in saturated fat cholesterol and sodium can help you control your weight, blood pressure, cholesterol and blood sugar. Try substituting whole-grain bread in piece of white bread: grabbing an apple, a banana or carrot sticks at a snack and reading nutrition labels as a guide to controlling the amount of salt and fat you eat.",
            "Lose extra pounds and maintain a healthy weight. If you're overweight losing as few as 5 to 10 pounds (about 23 to 4.5 kilograms) can help reduce your risk of high blood pressure and high cholesterol, two of the major risk factors for developing atherosclerosis. Losing weight helps reduce your risk of diabetes or control your condition if you already have diabetes",
            "Manage stress, Reduce stress as much as possible. Practice healthy techniques for managing stress, such as muscle relaxation and deep breathing", 
            "If you have high cholesterol high blood pressure, diabetes or other chronic disease, work with your doctor to manage the condition and promote overall health"]
     
     },{
         
        Disease : "Obesity",
        treatments : ["Learning about your condition. Education about obesity can help you learn more about why you became obese and what you can do about it. You may feel more empowered to take control and stick to your treatment plan Read reputable self-help books and consider talking about them with your doctor or therapist.",
                        "Sticking to your treatment plan. Changing a lifestyle you may have lived with for many years can be difficult. Be honest with your doctor, therapist or other health care providers if you find your activity or eating goals slipping. You can work together to come up with new ideas or new approaches",
                        "Enlisting support. Get your family and friends on board with your weight-loss goals. Surround yourself with people who will support you and help you, not sabotage your efforts. Make sure they understand how important weight loss is to your health. You might also want to join a weight-loss support group.",
                        "Keeping a record. Keep a food and activity log. This record can help you remain accountable for your eating and exercise habits. You can discover behavior that may be holding you back and, conversely, what works well for you. You can also use your log to track other important health parameters such as blood pressure and cholesterol levels and overall fitness.",
                        "Identifying and avoiding food triggers. Distract yourself from your desire to eat with something positive, such as calling a friend. Practice saying no to unhealthy foods and big portions. Eat when you're actually hungry not simply when the clock says it's time to eat.",
                        "Taking your medications as directed. If you take weight-loss medications or medications to treat obesity-related conditions, such as high blood pressure or diabetes, take them exactly as prescribed. If you have a problem sticking with your medication regimen or have unpleasant side effects, talk to your doctor."]
     
     },{
         
        Disease : "Cirrhosis",
        treatments : ["Don't drink alcohol. Whether your cirrhosis is caused by chronic alcohol use or another disease, avoid alcohol. Drinking alcohol may cause further liver damage.",
                        "Eat a low-sodium diet. Excess salt can cause your body to retain fluids, worsening swelling in your abdomen and legs. Use herbs for seasoning your food, rather than salt. Choose prepared foods that are low in sodium",
                        "Eat a healthy diet. People with cirrhosis can experience malnutrition  Combat this with a healthy plant-based diet that includes a variety of fruits and vegetables. Choose lean protein, such as legumes, poultry or fish. Avoid raw seafood.",
                        "Avoid infections. Cirrhosis make it more difficult for you to fight off infections. Protect yourself by avoiding people who are sick and washing your hands frequently. Get vaccinated for hepatitis A and B, influenza, and pneumonia.",
                        "Use over-the-counter medications carefully. Cirrhosis makes it more difficult for your liver to process drugs. For this reason, ask your doctor before taking any medications, including nonprescription drugs. Avoid drugs such as aspirin and ibuprofen (Advil, Motrin IB). If you have liver damage, your doctor may recommend you avoid acetaminophen (Tylenol, others) or take it in low doses for pain relief."
                    ]
     
     },{
         
        Disease : "Cancer",
        treatments : ["Stop smoking. If you smoke, quit. If you don't smoke, don't start. Smoking is linked to several types of cancer not just lung cancer Stopping now will reduce your risk of cancer in the future",
                        "Avoid excessive sun exposure. Harmful ultraviolet (UV) rays from the sun can increase your risk of skin cancer. Limit your sun exposure by staying in the shade, wearing protective clothing or applying sunscreen",
                        "Eat a healthy diet. Choose a diet rich in fruits and vegetables. Selectwhole grains and lean proteins.",
                        "Exercise most days of the week. Regular exercise is linked to a lower risk of cancer. Aim for at least 30 minutes of exercise most days of the week. If you haven't been exercising regularly, start out slowly and work your way up to 30 minutes or longer",
                        "Maintain a healthy weight. Being overweight or obese may increase your risk of cancer. Work to achieve and maintain a healthy weight through a combination of a healthy diet and regular exercise",
                        "Drink alcohol in moderation, if you choose to drink. If you choose to drink alcohol, limit yourself to one drink a day if you're a woman of any age or a man older than age 65, or two drinks a day if you're a man 65 years old or younger."
                    ]
     
     },{
         
        Disease : "Heart Disease",
        treatments : ["Stop smoking. Smoking is a major risk factor for heart disease, especially atherosclerosis. Quitting is the hast way to reduce your risk at heart disease and its complications",
                        "Move. Exercise helps you achieve and maintain a healthy weight and control diabetes, elevated cholesterol and high blood pressure - all risk factors for heart disease. If you have a heart arrhythmia or heart defect, there may be some restrictions on the activities you can do, so talk to your doctor",
                        "With your doctor's OK aim for 30 to 60 minutes of physical activity most days of the week",
                        "Eat healthy foods. A heart-healthy diet based on fruits, vegetables and whole grains - and low in saturated fat cholesterol, sodium and added sugar-can help you control your weight, blood pressure and cholesterol",
                        "Maintain a healthy weight. Eeng overweight increases your risk ol heart disease. A EM of less than 25 and a waist circumference of 35 inches (89.9 centimeters) or less is the goal for preventing and treating heart disease",
                        "Manage stress. Reduce stress as much as possible. Practice techniques for managing stress, such as muscle relaxation and deep breathing",
                        "Deal with depression. Being depressed can increase yout risk of heart disease significantly. Talk to your doctor if you feel hopeless or uninterested in your life.",
                        "Practice good hygiene. Stay away from people with infectious diseases such as colds, get vaccinated against the flu, regularly wash your hands", 
                        "Also, pet regular medical checkups, Early detection and treatment canet the stage for a lifetime af better Heart health"]
     
     },{
         
        Disease : "High Blood Pressure",
        treatments : ["Eat healthy foods. Eat a healthy diet. Try the Dietary Approaches to Stop Hypertension (DASH) diet, which emphasizes fruits, vegetables, whole grains, poultry, fish and low-a dairy foods. Gel plenty of potassium, which can help prevent and control high blood pressure. Eat less saturated fat and trans fat.",
                        "Decrease the salt in your diet. A lower sodium level-1,500 milligramsmga cay is appropriate for people 51 years of age or older, and individuals of any age wha are black or who have hypertension, diabetes or chronic kidney disease.", 
                        "Otherwise healthy people can aim for 2,800 mg a day arises. While you can reduce the amount of salt you eat by putting down the salt shaker you generally should also pay attention to the amount of salt that's in the processed foods you eat, such as canned soups or frozen dinners",
                        "Maintain a healthy weight. Keeping a healthy weight, or losing weight if you're overweight or obese, can help you control your high blood pressure and lower your risk of related health problems If youre overweight, losing even 5 pounds (2.3 kilograms) can lower your blood pressure",
                        "Increase physical activity. Regular physical activity can help Lower your blood pressure, manage stress, reduce your risk of several health problems and keep your weight under control",
                        "Limit alcohol, Even if you're healthy alcohol can raise your blood pressure. If you choose to drink alcohol, dc sc in moderation. For healthy adults that means up to pre drink a day for women of al ages and mer older than age 65, and up to two drinks a day for men age 65 and younger One drink equals 12 ounces of beer, 5 ounces of wine or 1.5 ounces of 30 proof liquor",
                        "Don't smoke. Tobacco mujeres blood vessel walls and speeds up the procass of hardening of the arteries. you smoke, ask your doctor to help you quit",
                        "Manage stress, Reduce stress as much as possible. Practice healthy coping techniques, such as muscle relaxation, deep breathing or meditation. Getting regular physical activity and plenty of sleep can Help 100"
                    ]
     
     },{
         
        Disease : "Type-II Diabetes",
        treatments : ["Commit to managing your diabetes. Learn all you can about type 2 diabetes. Make healthy eating and physical activity part of your daily routine. Establish a relationship with a diabetes educator, and ask your diabetes treatment team for help when you need it.",
                        "Take care of your teeth. Diabetes may leave you prone to more serious gum infections. Brush your teeth at least twice a day, floss your teeth once a day, and schedule regular dental exams. Consult your dentist  right away if your gums bleed or look red or swollen.",
                        "Pay attention to your feet. Wash your feet daily in lukewarm water. Dry them gently, especially between the toes, and moisturize with lotion. Check your feet every day for blisters, cuts, sores, redness and swelling Consult your doctor if you have a sore or other foot problem that isn't healing" ,
                        "Keep your blood pressure and cholesterol under control. Eating healthy foods and exercising regularly can go a long way toward controlling high blood pressure and cholesterol. Medication may be needed, too",
                        "If you smoke or use other types of tobacco, ask your doctor to help you quit Smoking increases your risk of various diabetes complications. Talk to your doctor about ways to stop smoking or to stop using other types of tobacco",
                        "If you drink alcohol, do so responsibly. Alcohol, as well as drink mixers, can cause either high or low blood sugar, depending on how much you drink and if you eat at the same time. If you choose to drink, do so in moderation and always with a meal",
                        "The recommendation is no more than one drink daily for women, no  more than two drinks daily for men age 65 and younger, and one drink day for men over 65 If you're on insulin or other medications that lower your blood sugar, check your blood sugar before you go to sleep to make sure you're at a safe level."]
     
     },{
         
        Disease : "Arthritis",
        treatments : ["Weight loss. If you're obese, losing weight will reduce the stress on your weight-bearing joints. This may increase your mobility and limit future joint injury",
                        "Exercise. Regular exercise can help keep your joints flexible. Swimming and water aerobics may be good choices because the buoyancy of the water rec stress on weight-bearing joints.",
                        "Heat and cold. Heating pads or ice packs may help relieve arthritis pain.", 
                        "Assistive devices. Using canes, walkers, raised toilet seats and other assistive devices can help protect your joints and improve your ability to perform daily tasks."]
     
     },{
         
        Disease : "Atherosclerosis",
        treatments : ["Stop smoking. Smoking damages your arteries. If you smoke or use tobacco in any form, quitting is the best way to halt the progression of atherosclerosis and reduce your risk of complications.", 
                    "Exercise most days of the week. Regular exercise can condition your muscles to use oxygen more efficiently. Physical activity can also improve circulation and promote development of new blood vessels that form a natural bypass around obstructions (collateral vessels) Exercise helps lower blood pressure and reduces your risk of diabetes.",
                    "Ideally, you should exercise 30 to 60 minutes most days of the week. If you can't fit it all into one session, try breaking it up into 10-minute intervals. You can take the stairs instead of the elevator, walk around the block during your lunch hour, or do some situps or pushups while watching television",
                    "Eat healthy foods. A heart-healthy diet based on fruits, vegetables and whole grains - and low in saturated fat, cholesterol and sodium - can help you control your weight, blood pressure, cholesterol and blood sugar. Try substituting whole-grain bread in place of white bread; grabbing an apple, a banana or carrot sticks as a snack, and reading nutrition labels as a guide to controlling the amount of salt and fat you eat",
                    "Lose extra pounds and maintain a healthy weight. If you're overweight, losing as few as 5 to 10 pounds (about 2.3 to 4.5 kilograms) can help reduce your risk of high blood pressure and high cholesterol, two of the major risk factors for developing atherosclerosis. Losing weight helps reduce your risk of diabetes or control your condition if you already have diabetes",
                    "Manage stress. Reduce stress as much as possible. Practice healthy techniques for managing stress, such as muscle relaxation and deep breathing."]
     
     }
    ]

const DiseaseAndTreatment=({d})=>{
    return (
        <Row className="justify-content-center">
        {
          
            d.map((disease,index) => (
                <>
                <Col xs="3">
                    <h3>{index+1} ) {disease.Disease}</h3>
                </Col>
                
                <Col xs="9">
                {
                    disease.treatments.map((cure,index)=>(
                        <h5>{index+1}  {cure}</h5>
                    ))
                }
                </Col>
                </>
                
            ))
        }
        </Row>
    )

}

var narr=[]
const processing=(a)=>{
    var narr=[]
        for(var i=0;i<Dtreatment.length;i++){
            var d=Dtreatment[i].Disease
            if(a.includes(d)){
                narr.push(Dtreatment[i])
            }
        }
    return narr
}
const LifestyleDisease = ({a})=>{
    if(a.length==0){
        return (
            <Row className="justify-content-center">
            <Col xs="12">
                <h3>You are not in the risk of getting any disease</h3>
            </Col>
            </Row>
            
        )
    }else{
        var z;
        z=processing(a)
        // console.log(z)
        return(
            <DiseaseAndTreatment d={z} />
        )

    }
}


const Output = ({m})=>{

    if(m==""){
        return (
            <Row className="justify-content-center">
                <Col xs="12" style={{backgroundColor: '#f1f1f1'}}>
                    <h2>Please fill the form to see output</h2>
                </Col>
            </Row>
            
        )
    }else{
        return (
            <>
            <Row className="justify-content-center">
            <Col xs="12" style={{backgroundColor: '#f1f1f1'}}>
                <h1>Output</h1> 
                <h2>Predicted current disease:</h2><h3>{m.symptom_disease}</h3>
                <h2>Future risk of getting lifestyle disease : </h2>
            </Col>
            </Row>
            <LifestyleDisease  a={m.lifestyle_disease} />
            
            
    
            </>
          );
    }
      
  }
  


export default Output; 