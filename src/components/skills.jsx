import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Stack from "../utils/tech-stacks";

export default function skills() {
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
        className="p-[20px] pb-[50px] sm:px-[100px] sm:pb-[60px] w-auto mx-[20px] sm:mx-[100px] bg-gradient-to-r from-[#380036] to-[#0CBABA] rounded-[64px]"
      >
        <div className="flex flex-col text-center gap-4 mt-5 mb-10">
          <h1 className="text-[35px] md:text-[45px] tracking-[0.8px] font-bold text-white">
            Skills
          </h1>
          <p className="text-[#B8B8B8] tracking-[0.8px] font-semibold text-[18px]">
            I can bring these tech stacks for your next projects.
          </p>
        </div>

        <Carousel
          responsive={responsive}
          swipeable={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
        >
          {Stack.map((element, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center text-center"
              >
                <img
                  className="sm:h-[100px] sm:w-[100px] h-[50px] w-[50px] object-cover self-center"
                  src={element.ImgUrl}
                  alt={element.Name}
                />
                <h1 className="text-white font-bold mt-[20px]">
                  {element.Name}
                </h1>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}
