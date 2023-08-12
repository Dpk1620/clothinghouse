import React from 'react';
import Image1 from "../assets/image1.jpg"
import Image2 from "../assets/image2.jpg"
import Image3 from "../assets/image3.jpg"
import Image4 from "../assets/image4.jpg"
import Image6 from "../assets/image6.jpg"

//  Image collage component to use in home page or if use other middle or bottom of the page so it's in seperate component.
const ImageCollage = () => {
  return (
    <div className='gallery'>
  <figure className='gallery__item gallery__item--1'>
    <img src={Image1} className="gallery__img" alt=""/>
  </figure>
  <figure className='gallery__item gallery__item--2'>
    <img src={Image2}  className="gallery__img" alt=""/>
  </figure>
  <figure className="gallery__item gallery__item--3">
    <img src={Image3}  className="gallery__img" alt=""/>
  </figure>
  <figure className="gallery__item gallery__item--4">
    <img src={Image6} className="gallery__img" alt=""/>
  </figure>
  <figure className="gallery__item gallery__item--5">
    <img src={Image4}  className="gallery__img" alt=""/>
  </figure>
</div>
  )
}

export default ImageCollage