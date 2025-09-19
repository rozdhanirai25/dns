import React from "react";

export default function About() {
  return (
    <section className="relative w-full flex flex-col items-center bg-[#f0eee0] py-16">
      {/* Top Center Main Image */}
      <img
        src="./about top img copy.webp"
        alt="About Main"
        className="w-[300px] h-[180px] "
      />

      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto items-start min-h-[600px]">
        {/* Left Side Content */}
        <div className="flex-1 flex flex-col justify-center px-8 py-6">
          <h2 className="text-4xl mt-0 md:text-6xl font-bold mb-4 xl:text-7xl pl-32" style={{ color: "#5a2d4b" }}>
            About
          </h2>
          <p className="text-lg md:text-2xl mb-6 xl:text-3xl" style={{ color: "#5a2d4b" }}>
            We are dedicated to teaching the art of tailoring, fashion design, and embroidery.
            Our expert trainers help you master skills for a successful career in fashion.
            Join us to unlock your creativity and become a professional tailor.
          </p>
          <ul className="list-disc pl-5 text-[#5a2d4b] md:text-2xl xl:text-3xl space-y-2">
            <li>Expert trainers</li>
            <li>Modern equipment</li>
            <li>Hands-on learning</li>
            <li>Career guidance</li>
          </ul>
        </div>

                {/* Right Side Splash and Images */}
        <div className="relative flex-[1.5] flex items-center justify-center px-16 py-14">
          {/* Splash Background Image */}
          <div className="relative w-[34rem] h-[34rem] -mt-10">
            <img
              src="./about bg splash.png"
              alt="Splash Background"
              className="w-full h-full object-cover"
              style={{ filter: "blur(2px)" }}
            />
            {/* Four images positioned inside splash */}
            <img
              src="./about img 1.png"
              alt="About 1"
              className="absolute top-20 left-20 w-32 h-32 "
            />
            <img
              src="./about img 2.png"
              alt="About 2"
              className="absolute top-20 right-20 w-32 h-32 "
            />
            <img
              src="./about img 3.png"
              alt="About 3"
              className="absolute bottom-20 left-20 w-32 h-32 "
            />
            <img
              src="./about img 4.png"
              alt="About 4"
              className="absolute bottom-20 right-20 w-32 h-32 "
            />
          </div>
        </div>
      </div>
    </section>
  );
}