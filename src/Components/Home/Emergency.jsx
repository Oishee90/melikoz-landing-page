import React from "react";
import img from "../../assets/emergency.png";
import { useTranslation } from "react-i18next";
const Emergency = () => {
  const { t, i18n } = useTranslation();
  return (
    <div id="contact" className="container p-4 pb-32 mx-auto mt-20">
      <div className="container flex flex-col-reverse items-center justify-between gap-10 mx-auto md:flex-row">
        {/* content */}
        <div className="flex flex-col items-center w-full gap-4 text-white md:w-1/2 lg:items-start ">
          <h1 className="dm-sans text-4xl lg:text-5xl main-color font-extrabold leading-[130%]">
            {t("emergency.title")}
          </h1>

          <p className="dm-sans text-xl font-normal leading-[160%] text-[#303030] mt-3 mb-3">
            {t("emergency.description")}
          </p>

          {/* button */}
          <div className="flex items-center gap-4">
            <div className="bg-[#0097EE] px-6 py-3 rounded-xl">
              <a href="https://www.apple.com/app-store/" target="_blank">
                {" "}
                <button className="text-lg font-bold text-[#FFFFFF]">
                  {t("emergency.button")}
                </button>
              </a>{" "}
            </div>
            <div className="bg-[#0097EE] px-6 py-3 rounded-xl">
              <a
                href="https://play.google.com/store/games?hl=en&pli=1"
                target="_blank"
              >
                <button className="text-lg font-bold text-[#FFFFFF]">
                  {t("emergency.button2")}
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* image */}
        <div className="flex items-center justify-center w-full md:w-1/2">
          <img src={img} alt="how it works" />
        </div>
      </div>
    </div>
  );
};

export default Emergency;
