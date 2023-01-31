import { useState } from "react";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

export default function NavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="w-full flex px-[5%] py-6 justify-between items-center navbar relative z-20"
    >
      <div className="absolute w-[35%] h-[10%] inset-0 gradient-01" />
      <h1 className="font-bold text-white text-3xl w-[124px] h-[32px]">LOGO</h1>
      <ul className="list-none sm:flex hidden justify-center gap-[50px] items-center flex-1">
        <motion.li
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
          className="font-normal cursor-pointer text-[16px] text-white mr-10"
        >
          <a
            href="#home"
            className="text-white font-semibold text-lg m-2 text-center"
          >
            Home
          </a>
        </motion.li>
        <motion.li
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
          className="font-normal cursor-pointer text-[16px] text-white mr-10"
        >
          <a
            href="#skills"
            className="text-white font-semibold text-lg m-2 text-center"
          >
            Skills
          </a>
        </motion.li>
        <motion.li
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
          className="font-normal cursor-pointer text-[16px] text-white mr-10"
        >
          <a
            href="#projects"
            className="text-white font-semibold text-lg m-2 text-center"
          >
            Projects
          </a>
        </motion.li>
      </ul>
      <button id="nav-btn" className="sm:flex hidden">
        Let's Connect
      </button>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <motion.img
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
          src="/menu.svg"
          className="cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />
        <motion.div
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          id="glass"
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            <motion.li
              whileTap={{ scale: 0.9 }}
              className="font-normal cursor-pointer text-[16px] text-white mb-10"
            >
              <a
                href="#home"
                className="text-white font-semibold text-lg m-2 text-center"
              >
                Home
              </a>
            </motion.li>
            <div className="bg-white w-[50%] h-[1px] mb-7"></div>
            <motion.li
              whileTap={{ scale: 0.9 }}
              className="font-normal cursor-pointer text-[16px] text-white mb-10"
            >
              <a
                href="#skills"
                className="text-white font-semibold text-lg m-2 text-center"
              >
                Skills
              </a>
            </motion.li>
            <div className="bg-white w-[50%] h-[1px] mb-7"></div>
            <motion.li
              whileTap={{ scale: 0.9 }}
              className="font-normal cursor-pointer text-[16px] text-white mb-10"
            >
              <a
                href="#projects"
                className="text-white font-semibold text-lg m-2 text-center"
              >
                Projects
              </a>
            </motion.li>
            <button id="nav-btn" className="">
              Let's Connect
            </button>
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
}
