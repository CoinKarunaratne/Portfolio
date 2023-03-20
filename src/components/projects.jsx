import { web2 } from "../utils/projects";
import { useState } from "react";
import { motion } from "framer-motion";

export default function projects() {
  const [projects, setProjects] = useState("web2");
  return (
    <section
      id="projects"
      className="bg-[#252525] mt-[-150px] pt-[170px] pb-[50px] relative z-0"
    >
      <div className="flex flex-col justify-center text-center align-middle mx-auto mt-[40px] px-[20px]">
        <h1 className="py-[20px] text-[45px] tracking-[0.8px] font-bold text-white">
          Projects
        </h1>
        <p className="py-[20px] sm:px-[150px] text-[#B8B8B8] tracking-[0.8px] font-semibold text-[18px] md:text-[20px]">
          In this section, you'll find a selection of my most notable projects
          that demonstrate my skills and expertise as a developer. Each project
          showcases my ability to create innovative and effective solutions.
          Whether you're interested in the technology I used, the design, or the
          overall user experience, I believe you'll find something here that
          will pique your interest. Browse through the projects and feel free to
          reach out to me if you have any questions or would like to learn more
          about my work.
        </p>
        <div className="grid grid-cols-2 self-center divide-x-2 md:w-[600px] w-[300px] text-[20px] font-bold text-white my-[20px] rounded-[80px] border-2 border-solid border-white">
          <button
            type="button"
            onClick={() => setProjects("web2")}
            className={`py-[20px] rounded-l-[80px] ${
              projects === "web2" &&
              "bg-gradient-to-r from-pink-500 to-blue-500"
            }`}
          >
            WEB 2
          </button>
          <button
            type="button"
            onClick={() => setProjects("web3")}
            className={`py-[20px] opacity-10 rounded-r-[80px] ${
              projects === "web3" &&
              "bg-gradient-to-r from-pink-500 to-blue-500"
            }`}
            disabled
          >
            WEB 3
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 px-[100px] py-[50px] gap-x-4 gap-y-8">
        {projects === "web2" &&
          web2.map((item, index) => {
            return (
              <motion.a
                id="card"
                key={index}
                href={item.Link}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                className="relative overflow-hidden"
              >
                <img
                  className="object-cover rounded-[25px]"
                  src={item.Image}
                  alt={item.Name}
                />
                <div
                  id="card-body"
                  className="w-full h-full backdrop-blur-[5px] bg-blue-400 bg-opacity-40 md:flex flex-col justify-center align-middle rounded-[25px] absolute top-[100%] hidden"
                >
                  <h1 className="self-center p-2 lg:p-7 text-sm lg:text-lg font-semibold">
                    {item.Description}
                  </h1>
                  <div className="flex justify-end">
                    <a href={item.Github}>
                      <button className="bg-green-600 p-2 mr-5 rounded-lg text-white text-sm lg:text-base">
                        Source Code
                      </button>
                    </a>
                  </div>
                </div>
              </motion.a>
            );
          })}
      </div>
    </section>
  );
}
