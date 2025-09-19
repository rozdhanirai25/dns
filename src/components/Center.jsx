import React from "react"; 
import Scissor1 from"../assets/Scissor1.webp";
import Scissor2 from"../assets/Scissor2.webp";

export default function Center() {
  return (
    <section className="py-12 bg-[#f0eee0] ">
        <div>
            <img src={Scissor1} alt="" className="ml-[200px]"/>
        </div>
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-3 mb-[150px] ">
        {/* Top Row */}
        <div className="flex justify-between w-full max-w-3xl">
          <button className="bg-transparent  pt-10 text-2xl border-none shadow-none text-[#4b284b] font-medium hover:text-[#6d3d55] transition cursor-pointer before:content-[''] before:block before:w-full before:h-[2px] before:bg-[#4b284b] before:mb-2 focus:outline-none focus:ring-0 active:outline-none">
            The Studio
          </button>
          <button className="bg-transparent  pt-10 text-2xl border-none shadow-none text-[#4b284b] font-medium hover:text-[#6d3d55] transition cursor-pointer before:content-[''] before:block before:w-full before:h-[2px] before:bg-[#4b284b] before:mb-2 focus:outline-none focus:ring-0 active:outline-none">
            Courses
          </button>
        </div>

        {/* Center Logo */}
        <div className="text-center">
          <h1 className="text-6xl  font-semibold text-[#4b284b]">AD</h1>
          <p className="italic text-4xl  pb-10 text-[#4b284b]">School of Fashion</p>
        </div>

        {/* Bottom Row */}
        <div className="flex justify-between w-full max-w-3xl">
          <button className="bg-transparent border-none text-2xl shadow-none text-[#4b284b] font-medium hover:text-[#6d3d55] transition cursor-pointer before:content-[''] before:block before:w-full before:h-[2px] before:bg-[#4b284b] before:mb-2 focus:outline-none focus:ring-0 active:outline-none">
            Community Works
          </button>
          <button className="bg-transparent border-none text-2xl shadow-none text-[#4b284b] font-medium hover:text-[#6d3d55] transition cursor-pointer  before:content-[''] before:block before:w-full before:h-[2px] before:bg-[#4b284b] before:mb-2 focus:outline-none focus:ring-0 active:outline-none">
            Our Story
          </button>
          <button className="bg-transparent border-none  text-2xl shadow-none text-[#4b284b] font-medium hover:text-[#6d3d55] transition cursor-pointer  before:content-[''] before:block before:w-full before:h-[2px] before:bg-[#4b284b] before:mb-2 focus:outline-none focus:ring-0 active:outline-none">
            Showcases
          </button>
        </div>
      </div>
      <div>
            <img src={Scissor2} alt="" className="ml-[200px]" />
        </div>
     
    </section>
  );
}
