import Spline from "@splinetool/react-spline";
import { useState, useEffect } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { motion } from "framer-motion";

export default function Hero() {
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let fullText = "Full Stack Developer";
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setDelta(500);
    }
  };

  const handleClick = () => {
    const targetElement = document.getElementById("contact");
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home">
      <div className="flex flex-col lg:flex-row">
        <div className="mt-0 pt-[150px] pb-[100px] px-[40px] md:pl-[80px] ml-2 md:ml-0">
          <span className="tracking-[0.8px] text-white py-[8px] px-[10px] font-bold bg-gradient-to-r from-pink-500 to-blue-500 border-2 border-solid border-white text-[20px] mb-[16px] inline-block">
            {" "}
            Welcome to My Portfolio
          </span>
          <h1 className="text-white text-[45px] md:text-[65px] tracking-[0.8px] py-[10px] font-bold mb-[20px] block">
            {`Hi I'm a `}
            <span className="border-r-[1px] border-solid border-zinc-200 hidden md:inline-block">
              {text}
            </span>
            <span className="border-solid border-zinc-200 md:hidden block">
              Full Stack Developer
            </span>
          </h1>
          <p className="text-[#B8B8B8] text-[18px] tracking-[0.8px] w-[96%]">
            As a driven and highly motivated software developer, I am dedicated
            to creating innovative and effective solutions for a variety of
            challenges.My passion for coding and problem-solving drives me to
            continuously improve and expand my knowledge, and I am excited to
            bring my expertise and enthusiasm to new and exciting projects.
            Let's create something great together.
          </p>
          <motion.button
            whileHover={{ x: 30 }}
            whileTap={{ scale: 0.7 }}
            initial={{ scale: 1 }}
            className="text-white font-bold text-[20px] mt-[60px] flex gap-4"
            onClick={handleClick}
          >
            Let's Connect
            <span>
              <ArrowRightCircle className="mt-2" />
            </span>
          </motion.button>
        </div>
        <div className="scale-[0.5] md:scale-100 mr-[500px] sm:mr-0 md:pt-[100px] hidden md:block">
          <Spline scene="https://prod.spline.design/HM-epi3h8pkjFmAj/scene.splinecode" />
        </div>
        <div className="md:hidden block">
          <img src="/3D Image.png" alt="3D-Image" />
        </div>
      </div>
    </section>
  );
}
