import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div className="w-full h-screen bg-[#21618C]" name="home">
      {/* Container*/}
      <div className="container max-w-[1000px] mx-auto px-8  flex flex-col justify-center h-full">
        <p className="text-pink-400"> Hey there, We are </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          WeFreelancer's
        </h1>
        <h2 className="text-4xl sm:7xl font-bold text-[#8892b0]">
          App | Web Developement
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          We are a organization that specializes in Web & App Development and We
          will be working to turn your <b>Imagination into a Reality</b>
        </p>
        <div>
          <Link to="skills" className="Box">
            <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-400 hover:border-pink-400">
              View Work
              <span className="group-hover:rotate-90 duration-30">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
