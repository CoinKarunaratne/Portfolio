import Css3 from "../svgComponents/Css3";
import Html5 from "../svgComponents/Html5";
import Express from "../svgComponents/Express";
import Firebase from "../svgComponents/Firebase";
import GithubIcon from "../svgComponents/GithubIcon";
import Javascript from "../svgComponents/Javascript";
import MongodbIcon from "../svgComponents/MongodbIcon";
import NextjsIcon from "../svgComponents/NextjsIcon";
import Nodejs from "../svgComponents/Nodejs";
import Postgresql from "../svgComponents/Postgresql";
import Prisma from "../svgComponents/Prisma";
import React from "../svgComponents/React";
import Redux from "../svgComponents/Redux";
import TailwindcssIcon from "../svgComponents/TailwindcssIcon";
import TypescriptIcon from "../svgComponents/TypescriptIcon";

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  return (
    <section id="skills" className="mt-[100px] relative z-10">
      <div
        id="carousel"
        className="p-[20px] pb-[50px] sm:px-[100px] sm:pb-[60px] w-auto mx-[20px] sm:mx-[100px] bg-gradient-to-r from-[#99ba67] to-[#5fb0b0] rounded-[64px]"
      >
        <div className="flex flex-col text-center gap-4 mt-5 mb-10">
          <h1 className="text-[35px] md:text-[45px] tracking-[0.8px] font-bold text-slate-700">
            Skills
          </h1>
          <p className="text-slate-600 tracking-[0.8px] font-semibold text-[18px]">
            I can bring these tech stacks for your next projects.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-7">
          <Html5 />
          <Css3 />
          <TypescriptIcon />
          <Firebase />
          <GithubIcon />
          <Javascript />
          <MongodbIcon />
          <NextjsIcon />
          <Nodejs />
          <Postgresql />
          <Prisma />
          <React />
          <Redux />
          <TailwindcssIcon />
          <Express />
        </div>
      </div>
    </section>
  );
}
