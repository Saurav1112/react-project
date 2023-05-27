import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import Store from "../../../Utility/ContextStore/ContextApi";

const  Tech9Content = ()=>{
    const [data] = useContext(Store)
    console.log("DATATTATA",data);
return(
    <>
    <div className="Tech9-line"/>
    <div className="Tech9-Container">
 
         
{data.filter((item)=>item.cat ==='Technology-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Tech9-Heading">!!!{d.title9}!!!</h2>
        <Link to={"/Technology"}><button className="Tech9-Back-Button">Let's Explore More Technology</button></Link> 
        <div className="Tech9-Media-Container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXc28Vjal3-9jEdZOGtnVyHNdo4InmpgQo-g&usqp=CAU" alt="Not-Found" className="Tech9-Boy-Logo"/>
            <p className="Tech9-Dimitry">Dimitry Nozhenko</p>
            <p className="Tech9-Date">Jan 28 2019 10 min read</p>
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg" alt="Not-Found"  className="Tech9-Social-Media-Logo"/>
        </div>
     
        <img src={d.img9} alt="Not-Found" className="Tech9-Image"/>
        <div className="Tech9-Image-Name">Image:{d.title9}</div>
        <div className="Tech9-Para-Container">
        <p>{d.ipara1}</p>
        <p>{d.ipara2}</p>
        <p>{d.ipara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default Tech9Content