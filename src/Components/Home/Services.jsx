// src/components/Services.jsx
import { useTranslation } from "react-i18next";
import services from "../../data";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="container px-4 py-12 mx-auto ">
      <h2 className="mb-8 text-2xl font-semibold text-center md:text-3xl">
        {t("servicesSection.title")}
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="overflow-hidden transition bg-white rounded-lg shadow hover:shadow-md"
          >
            <img
              src={service.image}
              alt={t(`servicesSection.list.${service.key}.title`)}
              className="object-cover w-full h-36"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold">
                {t(`servicesSection.list.${service.key}.title`)}
              </h3>
              <p className="text-sm text-gray-600">
                {t(`servicesSection.list.${service.key}.desc`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
