import React from 'react'
import DhamaalContent from './Dhamaal'
import ContextApi from '../../../Utility/ContextStore/ContextData'
import Clogo from '../../../ContentLogo'

const Dhamaal = () => {
  return (
    <>
    <Clogo/>
   <ContextApi>
    <DhamaalContent/>
    </ContextApi> 
    
    </>
  )
}

export default Dhamaal