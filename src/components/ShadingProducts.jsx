import React from 'react'
import Image1 from "../assets/Group50.jpg"
import Image2 from "../assets/Group51.jpg"
import Image3 from "../assets/Group52.jpg"
import Image4 from "../assets/Group53.jpg"
import Image5 from "../assets/Group54.jpg"
import Image6 from "../assets/Group55.jpg"
import {Container} from "@mui/material"

//  i can create this page also in scss so i can only write the one div code and use array
//  for that but i used normal coding with div and using bootstrap css or normal css to create it.
//  so u will understand that i am more familier with the css and style formate that have used in bootstrap.
const ShadingProducts = () => {
  return (   
<Container>
    <div className="d-flex justify-content-center flex-wrap mt-4 mb-4">
        <div className="mx-1">
            <img src={Image1}  style={{width:"270px",height:"320px", }} alt=""/>
            <p className="text-white text-center cardImageblur p-2" style={{bottom:"40px"}}>StreetwearCollections </p>
            </div>
            <div className="mx-1">
            <img src={Image2} style={{width:"270px",height:"320px"}} alt=""/>
            <p className="text-white text-center cardImageblur p-2" style={{bottom:"40px"}}>striped T-shirt </p>
            </div>
            <div className="mx-1">
            <img src={Image3} style={{width:"270px",height:"320px"}} alt=""/>
            <p className="text-white text-center cardImageblur p-2" style={{bottom:"40px"}}>Round Neck T-shirt </p>
            </div>
            <div className="mx-1" >
            <img src={Image4} style={{width:"270px" ,height:"320px",}} alt=""/>
            <p className="text-white text-center cardImageblur p-2" style={{bottom:"40px"}}>Printed T-shirt </p>
            </div>
            <div className="mx-1">
            <img src={Image5} style={{width:"270px",height:"320px"}} alt=""/>
            <p className="text-white text-center cardImageblur p-2" style={{bottom:"40px"}}>Oversized T-shirt </p>
            </div>
            <div className="mx-1">
            <img src={Image6} style={{width:"270px",height:"320px"}} alt=""/>
            <p className="text-white text-center cardImageblur p-2" style={{bottom:"40px"}}>Half Sleeves T-shirt </p>
            </div>
        </div>
        </Container>
    
  )
}

export default ShadingProducts