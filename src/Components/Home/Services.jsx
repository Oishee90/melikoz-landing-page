// src/components/Services.jsx
import { useTranslation } from "react-i18next";
import services from "../../data";
import { div } from "framer-motion/client";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#F3F0F0]">
      <div className="container px-4 py-12 mx-auto ">
        <h2 className="mb-16 text-2xl  text-center md:text-3xl text-[#000000] roboto font-bold">
          {t("servicesSection.title")}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="overflow-hidden transition rounded-lg shadow cursor-pointer pb-9 hover:shadow-md"
            >
              <img
                src={service.image}
                alt={t(`servicesSection.list.${service.key}.title`)}
                className="object-cover w-full h-[362px]"
              />
              <div className="p-4 text-center">
                <h3 className="mb-6 text-xl font-bold">
                  {t(`servicesSection.list.${service.key}.title`)}
                </h3>
                <p className="text-lg text-gray-600">
                  {t(`servicesSection.list.${service.key}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
