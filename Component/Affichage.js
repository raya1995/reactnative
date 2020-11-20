import ListPrestations from './ListPrestations'
import Prestations from './Prestation'
import React, { useState } from 'react';
import {  TouchableOpacity } from 'react-native'
const Affichage=()=>{




    return (
        <>
      
         {
        ListPrestations.map((item,i) => 
   
     <Prestations key={i} prest={item}/>
    
       )

         }
   
      
        </>
    )
}

export default Affichage;