import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Fitness11.style.css"
import Fitness11Content from './Fitness11'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Fitness11 = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <Fitness11Content/>
    </ContextApi>
    </>
  )
}

export default Fitness11