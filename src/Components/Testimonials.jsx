// src/components/Testimonials.jsx
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = t("testimonials.users", { returnObjects: true });

  return (
    <div className="container px-4 py-12 mx-auto text-center bg-white roboto ">
      <h2 className="mb-9 text-2xl md:text-3xl text-[#000000] font-bold">
        {t("testimonials.title")}
      </h2>
      <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 text-left bg-white border rounded-lg shadow-md"
          >
            <p className="mb-4 text-sm  text-[#303030] font-medium  text-justify">
              {testimonial.text}
            </p>
            <p className="font-semibold text-[#303030] text-xl ">
              — {testimonial.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
