import React ,{useContext}from "react";
import "./Dhamaal.style.css"
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  DhamaalContent = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Dhamaal-line"/>
    <div className="Dhamaal-Container">
 
         
{data.filter((item)=>item.cat ==='Bollywood-Images').map((a,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Dhamaal-Heading">!!!{a.title1}!!!</h2>
       
        <div className="Dhamaal-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Dhamaal-Boy-Logo"/>
            <p className="Dhamaal-Dimitry">Dimitry Nozhenko</p>
            
            <p className="Dhamaal-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Dhamaal-Social-Media-Logo"/>
        </div>
     
        <img src={a.img1} alt="Not-Found" className="Dhamaal-Image"/>
        <div className="Dhamaal-Image-Name">Image:{a.title1}</div>
        <div className="Dhamaal-Para-Container">
        <p>{a.apara1}</p>
        <p>{a.apara2}</p>
        <p>{a.apara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default DhamaalContent