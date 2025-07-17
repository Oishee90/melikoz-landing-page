import React from "react";
import { useTranslation } from "react-i18next";
import { GiCheckMark } from "react-icons/gi";
const MembershipPlans = () => {
  const { t } = useTranslation();

  const plans = [
    {
      key: "free",
      color: "bg-white",
      btnColor: "bg-blue-500 text-white",
    },
    {
      key: "silver",
      color: "bg-gray-200",
      btnColor: "bg-gray-600 text-white",
    },
    {
      key: "platinum",
      color: "bg-cyan-100",
      btnColor: "bg-cyan-500 text-white",
    },
    {
      key: "gold",
      color: "bg-yellow-200",
      btnColor: "bg-yellow-400 text-white",
    },
  ];

  return (
    <div className="container px-4 py-16 mx-auto text-center roboto ">
      <h2 className="mb-6 text-2xl  text-center md:text-3xl text-[#000000] roboto font-bold">
        {t("premiumTitle")}
      </h2>
      <p className="mb-10 text-[#303030] text-xl">{t("premiumDescription")}</p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan, index) => {
          const planData = t(`plans.${plan.key}`, { returnObjects: true });

          return (
            <div
              key={index}
              className={`${plan.color} rounded-xl shadow-lg p-6 flex flex-col justify-between`}
            >
              <div>
                <h3 className="mb-2 text-xl font-semibold">{planData.name}</h3>
                <p className="mb-4 text-lg font-medium">{planData.price}</p>
                <ul className="mb-6 space-y-1 text-left">
                  {planData.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2 text-[#303030]">
                        <GiCheckMark />
                      </span>{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`${plan.btnColor} px-4 py-2 rounded hover:opacity-90 font-semibold`}
              >
                {planData.btnText}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MembershipPlans;
