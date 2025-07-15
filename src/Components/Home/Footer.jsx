import React, { useMemo, useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import footer from "../../assets/footerlogo.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("");
  const menuItems = useMemo(
    () => [
      { name: t("navbar.home"), id: "home" },
      { name: t("navbar.services"), id: "services" },
      { name: t("navbar.howItWorks"), id: "howItWorks" },
      { name: t("navbar.premium"), id: "premium" },
      { name: t("navbar.contact"), id: "contact" },
    ],
    [i18n.language]
  );
  const handleScroll = (id) => {
    if (id === "home") {
      navigate("/");
    }
    if (id === "Services") {
      navigate("/Services");
    }

    if (id === "How It Works") {
      navigate("/How It Works");
    }
    if (id === "Premium") {
      navigate("/Premium");
    }
    if (id === "Contact") {
      navigate("/Contact");
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };
  return (
    <footer className="bg-[#0097EE] text-white pt-20  roboto">
      <div className="container grid grid-cols-1 gap-10 px-4 mx-auto mb-20 md:grid-cols-5 md:px-10 lg:px-20">
        {/* Logo and Store Links */}
        <div className="col-span-2">
          <img src={footer} alt="Footer Logo" />
          <p className="mt-5 text-[#FFFFFF] font-regular  text-sm">
            {t("footer.description")}
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="mb-4 font-semibold text-[#FFFFFF] roboto text-lg ">
            {t("footer.info")}
          </h3>
          <ul className="space-y-2 text-[#B3B3B3] text-sm font-normal">
            {menuItems.map(({ name, id }) => (
              <li key={id} className="text-[#FFFFFF] text-base">
                <button onClick={() => handleScroll(id)}>{name}</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact UsLinks */}
        <div>
          <h3 className="mb-4 font-semibold text-[#FFFFFF] roboto text-lg ">
            {t("footer.contactUs")}
          </h3>

          <ul className="space-y-2 text-[#FFFFFF] text-sm font-normal">
            <li>{t("footer.phone")}</li>
            <li>{t("footer.email")}</li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="mb-4 font-semibold text-[#FFFFFF] roboto text-lg ">
            {t("footer.findUs")}
          </h3>
          <ul className="space-y-2 text-[#FFFFFF] text-sm font-normal">
            <li>{t("footer.address")}</li>
            <li>{t("footer.hours")}</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0097EE] text-white py-5 px-4 container mx-auto ">
        <div className="container flex flex-col items-center justify-between gap-4 mx-auto md:flex-row">
          <p className="text-sm text-[#E8E6E6]">
            {t("footer.copyright")}{" "}
            <a
              href="https://x.com/iamhervewesbo"
              className="text-[#E8E6E6] font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.author")}
            </a>
          </p>
          {/* <div className="flex gap-4 text-white">
            <a
              href="https://www.facebook.com/"
              className="rounded-full py-2 px-2  bg-[#F4BAA280]"
              target="_blank"
            >
              <FaFacebookF className=" hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/"
              className="rounded-full py-2 px-2  bg-[#F4BAA280]"
              target="_blank"
            >
              <FaLinkedinIn className=" hover:text-white" />
            </a>
            <a
              href="https://x.com/"
              className="rounded-full py-2 px-2  bg-[#F4BAA280]"
              target="_blank"
            >
              <FaTwitter className=" hover:text-white" />
            </a>
            <a
              href="https://www.youtube.com/"
              className="rounded-full py-2 px-2  bg-[#F4BAA280]"
              target="_blank"
            >
              <FaYoutube className=" hover:text-white" />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
