import React from 'react'
import img from '../image.png'

const Main = () => {
    return (
    <div>
        <div className='image' >
            <img  src={img} alt= 'img'/>
        </div>
        <h1 className='name'>Nenad Stosic</h1>
    </div>
    )
}

export default Main