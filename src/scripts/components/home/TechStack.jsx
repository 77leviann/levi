import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  DiReact,
  DiNodejs,
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiBootstrap,
  DiGo,
  DiLinux,
} from "react-icons/di";
import { RiFlutterFill } from "react-icons/ri";
import PropTypes from "prop-types";

const TechStack = () => {
  const techStackList = [
    { Icon: DiNodejs, text: "Node.js" },
    { Icon: DiHtml5, text: "HTML5" },
    { Icon: DiCss3, text: "CSS3" },
    { Icon: DiJavascript, text: "JavaScript" },
    { Icon: DiReact, text: "React" },
    { Icon: DiBootstrap, text: "Bootstrap" },
    { Icon: DiGo, text: "Go" },
    { Icon: RiFlutterFill, text: "Flutter" },
    { Icon: DiLinux, text: "Linux" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className=" py-20 px-6 lg:px-8 lg:w-4/5 justify-center mx-auto flex flex-col items-center ">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900  mb-2 ">Tech Stack</h2>
        <p className="text-lg text-gray-700 mb-12 font-poppins">
          I&apos;m continuously learning to become a better software engineer.
        </p>

        <div className="mb-8">
          <Slider {...settings} className="flex justify-center">
            {techStackList.map(({ Icon, text }, index) => (
              <SkillItem key={index} Icon={Icon} alt={text} />
            ))}
          </Slider>
        </div>
      </div>
      <div className="top-0 left-0 w-full h-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-auto sm:right-0 clip-path-[polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)]" />
    </section>
  );
};

const SkillItem = ({ Icon, alt }) => {
  return (
    <div className="flex items-center justify-center">
      <Icon className="text-5xl text-gray-700" alt={alt} />
    </div>
  );
};

SkillItem.propTypes = {
  Icon: PropTypes.elementType,
  alt: PropTypes.string,
};

export default TechStack;
