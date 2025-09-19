import React from "react";

export default function Enquiry() {
  return (
    <section className="py-10 bg-[#f0eee0]">
      <div className="max-w-7xl  mx-auto px-6">
        <div className="bg-[#e7c1aa] rounded-3xl p-8 flex flex-col lg:flex-row justify-between items-center gap-8 h-[400px] ">
          {/* Left Text */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-medium text-[#4a2d2a]">
              Complete your training. Earn an industry-recognised certificate.
            </h2>
            <p className="italic text-2xl text-[#6d3d55] mt-7">
              Step into the world of fashion with confidence!
            </p>
          </div>

          {/* Right Form */}
          <div className="w-full max-w-sm">
            <h3 className="text-left text-2xl text-white mb-4 font-semibold">
              Enquire Now
            </h3>
            <form className="flex flex-col gap-3">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="First Name *"
                  className="w-1/2 rounded-full px-4 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  className="w-1/2 rounded-full px-4 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
              <input
                type="text"
                placeholder="Course*"
                className="w-full rounded-full px-4 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <textarea
                placeholder="Message*"
                className="w-full rounded-xl px-4 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none h-20"
              ></textarea>
              <button
                type="submit"
                className="bg-[#58284b] text-white rounded-full py-2 font-medium hover:bg-[#3f1935] transition"
              >
                Enquire Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
