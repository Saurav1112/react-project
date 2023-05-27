import React, { useContext } from 'react'
import { Link} from 'react-router-dom';
import Store from '../../Utility/ContextStore/ContextApi';

const BollywoodData = () => {

const [data] = useContext(Store)
// console.log("ContextData",data);

return (
<>
<div className='Bollywood-Container'>
<h2 className="Bollywood-Heading">Bollywood</h2>

{data.filter((item)=>item.cat ==='Bollywood-Images').map((d,item)=>{
  return(
 <div key={item}>
    <div className="Bollywood-Image-Container">
    <Link to={"/BollywoodContent/Dhamaal"} className='Link-Text'><img src={d.img1} alt='Not-Found'className='Bollywood-Image'/></Link>
    <Link to={"/BollywoodContent/Bahubali"} className='Link-Text'><img src={d.img2} alt='Not-Found'className='Bollywood-Image'/></Link>
   
    <Link to={"/BollywoodContent/Rrr"} className='Link-Text'><img src={d.img4} alt='Not-Found'className='Bollywood-Image'/></Link>
    <Link to={"/BollywoodContent/SecretSuperstar"} className='Link-Text'><img src={d.img5} alt='Not-Found'className='Bollywood-Image'/></Link>
    
    <Link to={"/BollywoodContent/Robot"} className='Link-Text'><img src={d.img7} alt='Not-Found'className='Bollywood-Image'/></Link>
    </div>

    <div className="Bollywood-Data-Container">

    <div>
    <Link to={"/BollywoodContent/Dhamaal"} className='H2-Link-Text'><h2>{d.title1}</h2></Link>
    <Link to={"/BollywoodContent/Dhamaal"} className='Link-Text'><div>{d.info1}</div></Link>
    </div>
   <br/> <br/> 

    <div className='BD'>
    <Link to={"/BollywoodContent/Bahubali"} className='H2-Link-Text'><h2>{d.title2}</h2></Link>
    <Link to={"/BollywoodContent/Bahubali"} className='Link-Text'><div >{d.info2}</div></Link>
    </div>
    <br/><br/><br/>

    

    <div className='RD'>
    <Link to={"/BollywoodContent/Rrr"} className='H2-Link-Text'><h2>{d.title4}</h2></Link>
    <Link to={"/BollywoodContent/Rrr"} className='Link-Text'><div>{d.info4}</div></Link>
    <p>Travel/August 21 2017</p>
    </div>
    <br/> <br/> 

    <div className='SD'>
    <Link to={"/BollywoodContent/SecretSuperstar"} className='H2-Link-Text'><h2>{d.title5}</h2></Link>
    <Link to={"/BollywoodContent/SecretSuperstar"} className='Link-Text'><div>{d.info5}</div></Link>
    <p>Travel/August 21 2017</p>
    </div>
    <br/><br/> <br/> 

    

    <div className='D2'>
    <Link to={"/HollywoodContent/Robot"} className='H2-Link-Text'><h2>{d.title7}</h2></Link>
    <Link to={"/BollywoodContent/Robot"} className='Link-Text'><div>{d.info7}</div></Link>
    <p>Travel/August 21 2017</p>
    </div>
  

    </div>
    </div>
  )
})
}
</div>
</>
  )
}

export default BollywoodData