import { useTranslation } from "react-i18next";
import img from "../../assets/bro.png";

const HowItWorks = () => {
  const { t } = useTranslation();
  const steps = t("HowITWorks.steps", { returnObjects: true });

  return (
    <div id="home" className="container p-4 pb-20 mx-auto mt-20 roboto">
      <h3 className="mb-16 text-2xl  text-center md:text-3xl text-[#000000] roboto font-bold">
        {t("HowITWorks.title")}
      </h3>

      <div className="flex flex-col-reverse items-center justify-between gap-12 md:flex-row ">
        {/* content */}
        <div className="flex flex-col items-center w-full gap-4 text-white md:w-1/2 lg:items-start">
          <ul className="space-y-2 text-black list-disc list-inside dark:text-white">
            {steps.map((step, index) => (
              <li key={index} className="text-xl font-medium roboto">
                {step}
              </li>
            ))}
          </ul>
        </div>

        {/* image */}
        <div className="flex items-center justify-center w-full md:w-1/2">
          <img src={img} alt="how it works" />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
