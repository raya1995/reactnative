
import React, { useState } from 'react';
const ListPrestations=[
        {
    prestation_id : 1,
    conceled : 0,
    rating :{
         
        ironing:3,
        cleaning:4,
    },

    address:{

        street:"23 rue de sabre",
        zipcode:"75016",
        city:"Paris",
        country:"France"
    },
     
    customer:{

        firstname:"Maria",
        lastname:"De La Vega",
    },

    provider:{

        firstname:"Anna",
        lastname:"Amara",
    }
      
  } , 

  {

    prestation_id : 2,
    conceled : 0,
    rating :{
   
        cleaning:5,
    },

    address:{

        street:"23 rue de sabre",
        zipcode:"75016",
        city:"Paris",
        country:"France"
    },
     
    customer:{

        firstname:"Maria",
        lastname:"De La Vega",
    },

    provider:{

        firstname:"Anna",
        lastname:"Amara",
    }
      
  }  
]


export default ListPrestations;