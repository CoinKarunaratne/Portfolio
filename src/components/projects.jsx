import { web2 } from "../utils/projects";
import { useState } from "react";

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
        <p className="py-[20px] sm:px-[150px] text-[#B8B8B8] tracking-[0.8px] font-semibold text-[20px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          vero dignissimos nisi. Nobis iste laboriosam voluptates ex, assumenda
          incidunt ullam inventore accusamus unde nemo blanditiis vero impedit
          odio eligendi facilis!
        </p>
        <div className="grid grid-cols-2 justify-center divide-x-2 w-[400px] text-[20px] font-bold text-white sm:w-[600px] mx-auto my-[20px] rounded-[80px] border-2 border-solid border-white">
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
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 px-[100px] py-[50px] gap-x-4 gap-y-8">
        {projects === "web2" &&
          web2.map((item) => {
            return (
              <a
                id="card"
                href={item.Link}
                className="relative overflow-hidden"
              >
                <img
                  className="object-cover rounded-[25px]"
                  src={item.Image}
                  alt={item.Name}
                />
                <div
                  id="card-body"
                  className="flex-col w-full h-full backdrop-blur-[5px] bg-blue-400 bg-opacity-40 flex justify-center align-middle rounded-[25px] absolute top-[100%]"
                >
                  <h1 className="font-bold text-white m-auto opacity-100 leading-[0.8] text-[24px] bg-gradient-to-r from-lime-500 to-sky-500 p-[10px] rounded-[5px]">
                    This is a {item.Type} website.
                  </h1>
                  <div className="grid grid-cols-5 gap-4 p-5">
                    {item.Techs.map((item) => {
                      return (
                        <img
                          src={`/${item}.png`}
                          alt=""
                          className="object-cover rounded-[10px] self-center"
                        />
                      );
                    })}
                  </div>
                </div>
              </a>
            );
          })}
      </div>
    </section>
  );
}
