import React from 'react'
import Img1 from "../assets/Learn1.webp"

export default function Galary() {
  return (
    <>
    <div className='bg-[#f0eee0] text-5xl italic text-center text-[#5b2a59] '>Gallery</div>
    <div className=" grid grid-cols-4 gap-2 items-center w-full p-4 bg-[#f0eee0] pt-10 pb-20">
        <img src={Img1} alt="" />
        <img src={Img1} alt="" />
        <img src={Img1} alt="" />
        <img src={Img1} alt="" />
    </div>
    
    </>
  )
}

