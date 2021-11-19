// import "bootstrap/dist/css/bootstrap.min.css";


import React from "react";
import "./style.css";
import { MedicalTreatments } from "./MedicalTreatments" ;
import { MedicalTreatmentList } from "./MedicalTreatmentList";
import { MedicalTreatmentPanel} from "./MedicalTreatmentPanel"; 

 import React from "react";
// import "./style.css";


function MedicalTreatments(props) {
  return(
  <div>
  <p> Name :  {props.name} </p>
  <p> Treatment ID :  {props.treatId} </p>
  <p> Treatment course :  {props.treatCourseId} </p>
  <p> startDate :  {props.startDate} </p>
  <p> Type :  {props.type} </p>
  <p> category :  {props.category} </p>

  </div>
  );
}

export defult MedicalTreatments ;
export defult MedicalTreatmentPanel; 
export defult MedicalTreatmentList; 

 print (MedicalTreatments)
// function toString(nm,id,treatCourseId,type,category,startDate){
//   return nm + ", " + treatId + ", " + treatCourseId + ", " + type+ category + ", " + startDate;
// }


// export default function App() {
  
//   return (
//     /*<div style={{color:"red", fontFamily:"Arial"}}>
//     css now in style.css*/
//     <div>
//         <Product Name={name}  Id={Id} datePurchased={datePurchased} price={price}/>
//         <button onClick={clickHandler}>
//           Show Product
//         </button>

//     </div>
//   );
// }




//   return (
//     <>
//       <h1> MedicalTreatements</h1>
//       <ul>
{MedicalTreatements.map((item) => <li ={MedicalTreatements.Name}>{MedicalTreatements.treatId}</li>)}
//       </ul>
//     </>
// //   );
// // }

ReactDOM.render(<MedicalTreatements />, document.getElementById('root'));




//

