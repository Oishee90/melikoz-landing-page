import { useTranslation } from "react-i18next";
import banner from "../../assets/Banner Image.png";

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div id="home" className="container p-4 pb-32 mx-auto mt-28">
      <div className="flex flex-col-reverse items-center justify-between gap-10 lg:flex-row lg:items-center">
        {/* content */}
        <div className="flex flex-col items-center w-full gap-4 text-white lg:items-start ">
          <h1 className="dm-sans text-4xl lg:text-5xl main-color font-extrabold leading-[130%]">
            {t("banner.title")}
          </h1>

          <p className="dm-sans text-xl font-normal leading-[160%] text-[#303030] mt-3 mb-3">
            {t("banner.description")}
          </p>

          {/* button */}
          <div className="bg-[#0097EE] px-6 py-3 rounded-xl">
            <button className="text-lg font-bold text-[#FFFFFF]">
              {t("banner.button")}
            </button>
          </div>

          <div className="flex items-center gap-6 mt-3">
            {/* user */}
            <div className="text-2xl font-bold roboto text-[#303030] flex items-start flex-col">
              <h1>1000+</h1>
              <p>{t("banner.stats.user")}</p>
            </div>
            {/* provider */}
            <div className="text-2xl font-bold roboto text-[#303030] flex items-start flex-col">
              <h1>2000+</h1>
              <p>{t("banner.stats.provider")}</p>
            </div>
            {/* services */}
            <div className="text-2xl font-bold roboto text-[#303030] flex items-start flex-col">
              <h1>300+</h1>
              <p>{t("banner.stats.services")}</p>
            </div>
          </div>
        </div>

        {/* image */}
        <div className="w-full">
          <img src={banner} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
