import { motion } from "framer-motion";

export default function () {
  return (
    <>
      <section
        id="contact"
        className="flex flex-col md:flex-row p-[40px] mb-0 lg:mb-[50px] relative z-0"
      >
        <motion.div
          className="flex-shrink p-[40px]"
          whileInView={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{
            delay: 0.5,
            duration: 2,
            type: "spring",
          }}
        >
          <img src="/contact-img.svg" alt="" className="shrink" />
        </motion.div>
        <div className="flex flex-col grow p-[40px] gap-[20px]">
          <h1 className="text-white font-bold leading-[0.8] text-[45px]">
            Get In Touch
          </h1>
          <form
            action=""
            className="grow grid gap-4 grid-cols-1 grid-rows-5 sm:grid-cols-2 py-[40px]"
          >
            <input
              type="text"
              className="bg-opacity-10 rounded-lg bg-slate-600 h-[60px] border-slate-500 border-solid border-2 px-5 text-white"
              placeholder="First Name"
            />
            <input
              type="text"
              className="bg-opacity-10 rounded-lg bg-slate-600 h-[60px] border-slate-500 border-solid border-2 px-5 text-white"
              placeholder="Last Name"
            />
            <input
              type="text"
              className="bg-opacity-10 rounded-lg bg-slate-600 h-[60px] border-slate-500 border-solid border-2 px-5 text-white"
              placeholder="Email Address"
            />
            <input
              type="text"
              className="bg-opacity-10 rounded-lg bg-slate-600 h-[60px] border-slate-500 border-solid border-2 px-5 text-white"
              placeholder="Phone No."
            />
            <textarea
              type="text"
              className="bg-opacity-10 rounded-lg bg-slate-600 row-span-3 col-span-2 border-slate-500 border-solid border-2 px-5 py-7 text-white"
              placeholder="Message"
            />
            <button
              type="submit"
              className="h-[60px] w-[150px] bg-slate-600 rounded-sm text-white font-bold leading-[0.8] text-[20px]"
            >
              Send
            </button>
          </form>
        </div>
      </section>
      <section id="newsletter" className="mb-[-170px] relative z-20">
        <div className="bg-white rounded-[64px] mx-[10%] p-[50px] lg:p-[100px] flex lg:flex-row flex-col gap-4 basis-3 h-auto">
          <h1 className="text-black font-bold leading-[1] md:text-center lg:text-left text-[20px] lg:text-[35px] basis-1/3 lg:pr-[50px]">
            Subscribe to our Newletter and Never miss latest updates
          </h1>
          <div className="basis-2/3 flex grow px-auto sm:px-10">
            <form
              action=""
              className="grow my-[auto] flex flex-col md:flex-row relative justify-center gap-4"
            >
              <input
                type="text"
                placeholder="Your Email Address"
                className="h-[60px] grow border-slate-500 border-solid border-2 rounded-xl px-5"
              />
              <span className="sm:absolute sm:right-0  rounded-xl h-[50px] sm:h-full w-auto md:w-[100px] lg:w-[150px] p-1">
                <button
                  id="newsletter-btn"
                  className="rounded-xl h-[50px] sm:h-full w-full bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold text-[20px]"
                >
                  Send
                </button>
              </span>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
