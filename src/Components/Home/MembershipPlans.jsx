import React from "react";
import { useTranslation } from "react-i18next";
import { GiCheckMark } from "react-icons/gi";
const MembershipPlans = () => {
  const { t } = useTranslation();

  const plans = [
    {
      key: "free",
      color: "bg-[#FFFFFF]",
      btnColor: "bg-[#0097EE] text-[#FFFFFF]",
    },
    {
      key: "silver",
      color: " bg-[#DFDFDF]",
      btnColor: "bg-[#949494] text-white",
    },
    {
      key: "platinum",
      color: "bg-[#B9FFFB]",
      btnColor: "bg-[#00FFF2] text-white",
    },
    {
      key: "gold",
      color: "bg-[#FFEA7F]",
      btnColor: "bg-[#FFD700] text-white",
    },
  ];

  return (
    <div
      id="premium"
      className="container px-4 py-16 mx-auto text-center roboto"
    >
      <h2 className="mb-6 text-2xl md:text-3xl text-[#000000] font-bold">
        {t("premiumTitle")}
      </h2>
      <p className="mb-10 text-[#303030] text-xl">{t("premiumDescription")}</p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 md:h-96">
        {plans.map((plan, index) => {
          const planData = t(`plans.${plan.key}`, { returnObjects: true });

          return (
            <div
              key={index}
              className={`${plan.color} rounded-xl shadow-lg p-6 flex flex-col  pb-12 pt-12 `}
            >
              {/* Card Content */}
              <div className="flex flex-col justify-between flex-grow h-full">
                <div className="mb-6">
                  <h3 className="mb-2 text-xl font-semibold text-[#303030] text-[32px] text-left ">
                    {planData.name}
                  </h3>
                  <p className="mb-4 text-xl font-semibold text-[#303030] text-[29px]  text-left">
                    {planData.price}
                  </p>
                  <ul className="space-y-1 text-left">
                    {planData.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="mr-2 text-[#303030] font-normal text-lg">
                          <GiCheckMark />
                        </span>{" "}
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button at the Bottom */}
                <button
                  className={`${plan.btnColor} mt-auto px-4 py-2 rounded hover:opacity-90 font-semibold w-full text-white`}
                >
                  {planData.btnText}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MembershipPlans;
