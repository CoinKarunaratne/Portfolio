import Spline from "@splinetool/react-spline";
import { useState, useEffect } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";

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

  return (
    <section id="home">
      <div className="flex flex-col lg:flex-row">
        <div className="mt-0 pt-[150px] pb-[100px] pl-[80px]">
          <span className="tracking-[0.8px] text-white py-[8px] px-[10px] font-bold bg-gradient-to-r from-pink-500 to-blue-500 border-2 border-solid border-white text-[20px] mb-[16px] inline-block">
            {" "}
            Welcome to My Portfolio
          </span>
          <h1 className="text-white text-[65px] tracking-[0.8px] py-[10px] font-bold mb-[20px] block">
            {`Hi I'm a `}
            <span className="border-r-[1px] border-solid border-zinc-200">
              {text}
            </span>
          </h1>
          <p className="text-[#B8B8B8] text-[18px] tracking-[0.8px] w-[96%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            perferendis architecto corrupti illo eligendi vel tempore, nostrum
            explicabo ea, atque in modi quaerat, voluptatum voluptatem quia.
            Magni eveniet tempora assumenda.
          </p>
          <button className="text-white font-bold text-[20px] mt-[60px] flex gap-4">
            Let's Connect
            <span>
              <ArrowRightCircle className="mt-2" />
            </span>
          </button>
        </div>
        <div className="scale-[0.6] sm:scale-100 mr-[500px] sm:mr-0 md:pt-[100px]">
          <Spline scene="https://prod.spline.design/luG2LYbF43qgQCi1/scene.splinecode" />
        </div>
      </div>
    </section>
  );
}
