import { motion } from "framer-motion";

export default function () {
  return (
    <section id="footer" className="bg-black relative z-0 h-[400px] w-full">
      <div className="flex h-full w-full justify-between">
        <div className="text-white text-[45px] font-bold align-text-bottom self-end p-8">
          LOGO
        </div>
        <div className="align-text-bottom self-end flex-col gap-4">
          <div className="flex gap-7 p-8 lg:mr-8">
            <motion.a
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              href="https://github.com/CoinKarunaratne"
            >
              <img
                src="contact/github-icon.svg"
                alt=""
                className="w-10 hover:opacity-70"
              />
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              href=""
              disabled
            >
              <img
                src="contact/facebook.svg"
                alt=""
                className="w-10 hover:opacity-70"
              />
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              href=""
              disabled
            >
              <img
                src="contact/instagram-icon.svg"
                alt=""
                className="w-10 hover:opacity-70"
              />
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              href="https://www.linkedin.com/in/ashan-karunaratne-26915025a/"
            >
              <img
                src="contact/linkedin-icon.svg"
                alt=""
                className="w-10 hover:opacity-70"
              />
            </motion.a>
          </div>

          <div className="text-slate-500 font-semibold text-center mb-5">
            Copyright 2023. All Rights Reserved
          </div>
        </div>
      </div>
    </section>
  );
}
