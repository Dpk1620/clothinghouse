import React from 'react'

// it is seperate component because if it will take time to load so it will not effect on website content loading and website work fast and userfrendly.
const MainImage = ({image}) => {
    return (
        <div className='d-flex justify-content-center mb-2'>
            <img src={image} style={{ width: "100%" }} alt="" />
        </div>
    )
}

export default MainImage