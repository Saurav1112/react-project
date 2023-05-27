import React from 'react'
import Clogo from '../../../ContentLogo'
import "./Pathaan.style.css"
import PathaanContent from './Pathaan'
import ContextApi from '../../../Utility/ContextStore/ContextData'
const Pathaan = () => {
  return (
    <>
    <Clogo/> 
     <ContextApi>
      <PathaanContent/>
    </ContextApi>
    </>
  )
}

export default Pathaan