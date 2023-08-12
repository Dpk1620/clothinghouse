import { Divider } from '@mui/material'
import React from 'react'


// Diverder is reused just sending the middle name of title content
const DividerHr = ({name}) => {
    return (
        <Divider variant='middle' style={{ width: "65%", marginTop: "40px", fontSize:"4px" }}>
            <h2 className='fw-bold mt-1' style={{
                  justifyItems: "center",
                  marginLeft: "22px",
                  fontFamily: "Playfair Display",
            }} >{name}</h2>
        </Divider>

    )
}

export default DividerHr