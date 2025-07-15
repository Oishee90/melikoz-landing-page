import banner from "../../assets/Banner Image.png";
import { NavLink } from "react-router-dom";
import google from "../../assets/google.png";
import app from "../../assets/app.png";

const Banner = () => {
  return (
    <div id="home" className="container p-4 pb-32 mx-auto mt-28">
      <div className="flex flex-col-reverse items-center justify-between gap-10 lg:flex-row lg:items-center">
        {/*  content  */}
        <div className="flex flex-col items-center w-full gap-4 text-white lg:items-start lg:w-1/2">
          <h1 className="dm-sans text-4xl lg:text-7xl main-color font-extrabold leading-[130%]">
            <span className="bg-gradient-to-r from-[#1984ff80] to-[#00ccff] bg-clip-text text-transparent">
              Your Winning Edge
            </span>{" "}
            Starts with{" "}
            <span className="bg-gradient-to-r from-[#1956ff80] to-[#00b7ff] bg-clip-text text-transparent">
              AI.
            </span>{" "}
          </h1>

          <p className="dm-sans   text-base   font-normal leading-[160%] text-[#BABABA] ">
            Experience the power of smart note-taking and transform the way you
            work today.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://play.google.com/store/games?device=windows"
              target="_blank"
            >
              <img src={google} alt="" />
            </a>
            <a href="https://www.apple.com/iphone/" target="_blank">
              <img src={app} alt="" />
            </a>
          </div>
        </div>
        {/* img */}
        <div className="w-full lg:w-1/2 ">
          <img src={banner} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
