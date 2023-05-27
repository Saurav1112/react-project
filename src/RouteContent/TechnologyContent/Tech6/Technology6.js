import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  Tech6Content = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Tech6-line"/>
    <div className="Tech6-Container">
 
         
{data.filter((item)=>item.cat ==='Technology-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h3 className="Tech6-Heading">!!!{d.title6}!!!</h3>
         
        <div className="Tech6-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Tech6-Boy-Logo"/>
            <p className="Tech6-Dimitry">Dimitry Nozhenko</p>
            <p className="Tech6-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Tech6-Social-Media-Logo"/>
        </div>
     
        <img src={d.img6} alt="Not-Found" className="Tech6-Image"/>
        <div className="Tech6-Image-Name">Image:{d.title6}</div>
        <div className="Tech6-Para-Container">
        <p>{d.fpara1}</p>
        <p>{d.fpara2}</p>
        <p>{d.fpara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default Tech6Content