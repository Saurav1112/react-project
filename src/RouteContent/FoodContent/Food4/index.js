import "./Food4.style.css"
import Food4Content from './Food4'
import Clogo from '../../../ContentLogo'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Food4 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Food4Content/>
    </ContextApi>
    </>
  )
}

export default Food4