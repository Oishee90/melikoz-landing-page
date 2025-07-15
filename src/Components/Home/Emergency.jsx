import React from "react";
import img from "../../assets/emergency.png";
import { useTranslation } from "react-i18next";
const Emergency = () => {
  const { t, i18n } = useTranslation();
  return (
    <div id="home" className="container p-4 pb-32 mx-auto mt-28">
      <div className="flex flex-col-reverse items-center justify-between gap-10 lg:flex-row lg:items-center">
        {/* content */}
        <div className="flex flex-col items-center w-full gap-4 text-white lg:items-start ">
          <h1 className="dm-sans text-4xl lg:text-5xl main-color font-extrabold leading-[130%]">
            {t("emergency.title")}
          </h1>

          <p className="dm-sans text-xl font-normal leading-[160%] text-[#303030] mt-3 mb-3">
            {t("emergency.description")}
          </p>

          {/* button */}
          <div className="flex items-center gap-4">
            <div className="bg-[#0097EE] px-6 py-3 rounded-xl">
              <button className="text-lg font-bold text-[#FFFFFF]">
                {t("emergency.button")}
              </button>
            </div>
            <div className="bg-[#0097EE] px-6 py-3 rounded-xl">
              <button className="text-lg font-bold text-[#FFFFFF]">
                {t("emergency.button2")}
              </button>
            </div>
          </div>
        </div>

        {/* image */}
        <div className="w-full">
          <img src={img} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Emergency;
