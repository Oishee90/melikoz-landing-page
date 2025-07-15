import { useEffect, useMemo, useRef, useState } from "react";
import logo from "../../assets/logo.png";
import { BsArrowUpRightSquare } from "react-icons/bs";

import { CgArrowTopRightR } from "react-icons/cg";
import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { FaGlobeAmericas } from "react-icons/fa"; // 🌐 icon
import { FaChevronDown } from "react-icons/fa"; // ⏷ icon
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal State
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const dropdownRef = useRef();

  const [lang, setLang] = useState(i18n.language || "en");
  const [showDropdown, setShowDropdown] = useState(false);
  const menuItems = useMemo(
    () => [
      { name: t("navbar.home"), id: "home" },
      { name: t("navbar.services"), id: "services" },
      { name: t("navbar.howItWorks"), id: "howItWorks" },
      { name: t("navbar.premium"), id: "premium" },
      { name: t("navbar.contact"), id: "contact" },
    ],
    [i18n.language]
  ); // ✅ change here!

  useEffect(() => {
    const handleScrollEvent = () => {
      menuItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  const navigate = useNavigate();

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
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error("Invalid user in localStorage", err);
      }
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Existing section tracking
      menuItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="container mx-auto roboto ">
      <nav
        className={`text-white fixed top-0 left-0 w-full z-50  transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md bg-[#dee2e980]  " : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between px-6 pt-6 pb-6 mx-auto 2xl:py-2 ">
          {/*  Left: Logo */}
          <div className="text-xl md:text-xl lg:text-2xl font-extrabold dm-sans text-[#FFFFFF]">
            <a
              className=" text-[#FFFFFF] flex justify-center items-center gap-3"
              href="#"
            >
              <img src={logo} alt="" className="" />
            </a>
          </div>

          {/* Center: Navigation Menu (Large Screen) */}
          <ul className="items-center hidden gap-8 text-lg list-none main-color lg:flex ">
            {menuItems.map(({ name, id }) => (
              <li key={id}>
                <button
                  onClick={() => handleScroll(id)}
                  className={`text-lg  transition-all ${
                    activeSection === id
                      ? "text-[#0097EE]  border-b-2 border-[#0097EE] "
                      : "hover:text-blue-"
                  }`}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>

          {/*  Right: Log In & Sign Up (Large Screen) */}
          <div className="items-center hidden gap-6 lg:flex">
            <div className="relative flex items-center gap-2">
              {/* 🌐 Language Icon */}
              <FaGlobeAmericas className="text-[#0097EE] text-xl" />

              {/* Toggle Button with ▼ Icon */}
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center justify-between gap-2 border border-[#0097EE] px-3 py-1 rounded text-sm text-[#0097EE] hover:bg-[#0097EE] hover:text-white transition"
              >
                {lang === "en" ? "English" : "Spanish"}
                <FaChevronDown className="text-xs mt-0.5" />
              </button>

              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute right-0 z-50 w-32 mt-2 text-black bg-white rounded-md shadow-lg top-full">
                  <button
                    onClick={() => {
                      console.log("Switching to English"); // 🔍 Debug log
                      setLang("en");
                      i18n.changeLanguage("en");
                      setShowDropdown(false);
                    }}
                    className={`block w-full text-left px-4 py-2 hover:bg-[#0097EE] hover:text-white ${
                      lang === "en" ? "font-bold bg-gray-100" : ""
                    }`}
                  >
                    English
                  </button>

                  <button
                    onClick={() => {
                      console.log("Switching to Spanish"); // 🔍 Debug log
                      setLang("es");
                      i18n.changeLanguage("es");
                      setShowDropdown(false);
                    }}
                    className={`block w-full text-left px-4 py-2 hover:bg-[#0097EE] hover:text-white ${
                      lang === "es" ? "font-bold bg-gray-100" : ""
                    }`}
                  >
                    Spanish
                  </button>
                </div>
              )}
            </div>
          </div>

          {/*  Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <div className="relative flex items-center gap-2">
              {/* 🌐 Language Icon */}
              <FaGlobeAmericas className="text-[#0097EE] text-xl" />

              {/* Toggle Button with ▼ Icon */}
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center justify-between gap-2 border border-[#0097EE] px-3 py-1 rounded text-sm text-[#0097EE] hover:bg-[#0097EE] hover:text-white transition"
              >
                {lang === "en" ? "English" : "Spanish"}
                <FaChevronDown className="text-xs mt-0.5" />
              </button>

              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute right-0 z-50 w-32 mt-2 text-black bg-white rounded-md shadow-lg top-full">
                  <button
                    onClick={() => {
                      setLang("en");
                      i18n.changeLanguage("en");
                      setShowDropdown(false);
                    }}
                    className={`block w-full text-left px-4 py-2 hover:bg-[#0097EE] hover:text-white ${
                      lang === "en" ? "font-bold bg-gray-100" : ""
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      setLang("es");
                      i18n.changeLanguage("es");
                      setShowDropdown(false);
                    }}
                    className={`block w-full text-left px-4 py-2 hover:bg-[#0097EE] hover:text-white ${
                      lang === "es" ? "font-bold bg-gray-100" : ""
                    }`}
                  >
                    Spanish
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-4 py-2 text-[#0097EE] rounded-md "
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/*  Mobile Menu */}
      </nav>
      {isOpen && (
        <div
          className={`lg:hidden fixed top-[80px] w-1/2 backdrop-blur-md bg-[#dee2e980] text-center p-4 z-40 shadow-md transition-all duration-300 ease-in-out right-0
    ${
      isOpen
        ? "translate-x-0 opacity-100"
        : "translate-x-full opacity-0 pointer-events-none"
    }
  `}
        >
          <ul className="flex flex-col gap-4">
            {menuItems.map(({ name, id }) => (
              <li key={id}>
                <button
                  onClick={() => {
                    handleScroll(id);
                    setIsOpen(false);
                  }}
                  className="text-lg font-medium hover:text-[#0097EE]"
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 mt-4"></div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
