import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  PathaanContent = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Pathaan-line"/>
    <div className="Pathaan-Container">
 
         
{data.filter((item)=>item.cat ==='Bollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Pathaan-Heading">!!!Pathaan!!!</h2>
         
        <div className="Pathaan-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Pathaan-Boy-Logo"/>
            <p className="Pathaan-Dimitry">Dimitry Nozhenko</p>
            <p className="Pathaan-Date"> Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Pathaan-Social-Media-Logo"/>
        </div>
     
        <img src={d.img8} alt="Not-Found" className="Pathaan-Image"/>
        <div className="Pathaan-Image-Name">Image:Pathaan</div>
        <div className="Pathaan-Para-Container">
        <p>{d.hpara1}</p>
        <p>{d.hpara2}</p>
        <p>{d.hpara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default PathaanContent