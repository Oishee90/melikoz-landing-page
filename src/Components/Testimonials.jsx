// src/components/Testimonials.jsx
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = t("testimonials.users", { returnObjects: true });

  return (
    <div className="container px-4 py-12 mx-auto text-center bg-white">
      <h2 className="mb-8 text-2xl font-semibold text-gray-800 md:text-3xl">
        {t("testimonials.title")}
      </h2>
      <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 text-left bg-white border rounded-lg shadow-md"
          >
            <p className="mb-4 text-gray-700">{testimonial.text}</p>
            <p className="font-semibold text-gray-900">— {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
