import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdClose, MdOutlineMenu } from "react-icons/md";

const Navbar = ({ t, lang }) => {
  const [language, setLanguage] = useState(lang);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const pathWithoutLang = location.pathname.split("/").slice(2).join("/");
  const isActive = (path) => {
    return currentPath === `/${lang}${path ? `/${path}` : ""}`;
  };

  const createLangLink = (lang) => {
    if (pathWithoutLang) {
      return `/${lang}/${pathWithoutLang}`;
    } else {
      return `/${lang}`;
    }
  };

  const handleLanguageChange = (newLang) => {
    setLanguage(newLang);
  };

  const languageFlags = {
    en: "/flags/en.png",
    ru: "/flags/ru.png",
    am: "/flags/am.png",
  };

  return (
    <nav className="max-w-[380px] sm:max-w-[620px] md:max-w-[750px] lg:max-w-[980px] xl:max-w-[1152px] mx-auto flex justify-between items-center py-5 px-5 relative">
      <MdOutlineMenu
        size={25}
        className="md:hidden cursor-pointer hover:text-red-500 transition-colors duration-300 ease-in"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <div className="flex md:hidden">
        {isMenuOpen && (
          <aside className="md:hidden fixed top-0 left-0 w-[50%] h-full bg-black text-white z-10">
            <div>
              <div className="flex justify-end p-5">
                <MdClose
                  size={25}
                  className="cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                />
              </div>
            </div>
            <div className=" flex flex-col gap-3 py-5 px-10">
              <Link to={`/${lang}`} onClick={() => setIsMenuOpen(false)}>
                {t("nav.home")}
              </Link>
              <Link
                to={`/${lang}/contact`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.contact")}
              </Link>
              <Link
                to={`/${lang}/property`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.property")}
              </Link>
            </div>
            <div className="py-5 px-10">
              <div className="relative group">
                <div className="flex items-center gap-1 py-1">
                  <img
                    src={languageFlags[language]}
                    alt={language}
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  <span>{language.toUpperCase()}</span>
                </div>
                <div className="hidden group-hover:block absolute top-full left-0 bg-gray-800 shadow-lg p-2 rounded z-10">
                  <div className="flex flex-col gap-2 min-w-[100px]">
                    <Link
                      to={createLangLink("en")}
                      onClick={() => handleLanguageChange("en")}
                      className="flex items-center gap-2 p-1"
                    >
                      <img
                        src="/flags/en.png"
                        alt="en"
                        className="w-5 h-5 rounded-full object-cover"
                      />
                      EN
                    </Link>
                    <Link
                      to={createLangLink("ru")}
                      onClick={() => handleLanguageChange("ru")}
                      className="flex items-center gap-2 p-1"
                    >
                      <img
                        src="/flags/ru.png"
                        alt="ru"
                        className="w-5 h-5 rounded-full object-cover"
                      />
                      RU
                    </Link>
                    <Link
                      to={createLangLink("am")}
                      onClick={() => handleLanguageChange("am")}
                      className="flex items-center gap-2  p-1"
                    >
                      <img
                        src="/flags/am.png"
                        alt="am"
                        className="w-5 h-5 rounded-full object-cover"
                      />
                      AM
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        )}
      </div>
      <div className="hidden md:flex gap-5">
        <Link
          to={`/${lang}`}
          className={`text-lg font-normal hover:text-purple-300 ${
            isActive("") ? "text-[#6f66ee]" : ""
          }`}
        >
          {t("nav.home")}
        </Link>
        <Link
          to={`/${lang}/contact`}
          className={`text-lg font-normal hover:text-purple-300 ${
            isActive("contact") ? "text-blue-600" : ""
          }`}
        >
          {t("nav.contact")}
        </Link>
        <Link
          to={`/${lang}/property`}
          className={`text-lg font-normal hover:text-purple-300 ${
            isActive("property") ? "text-blue-600" : ""
          }`}
        >
          {t("nav.property")}
        </Link>
      </div>
      <div className="hidden md:flex gap-2 relative group">
        <div className="flex items-center gap-1">
          <img
            src={languageFlags[language]}
            alt={language}
            className="w-5 h-5 rounded-full object-cover"
          />
          <span>{language.toUpperCase()}</span>
        </div>
        <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-lg p-2 rounded z-10">
          <div className="flex flex-col gap-2 min-w-[100px]">
            <Link
              to={createLangLink("en")}
              onClick={() => handleLanguageChange("en")}
              className="flex items-center gap-2 p-1"
            >
              <img
                src="/flags/en.png"
                alt="en"
                className="w-5 h-5 rounded-full object-cover"
              />
              EN
            </Link>
            <Link
              to={createLangLink("ru")}
              onClick={() => handleLanguageChange("ru")}
              className="flex items-center gap-2 p-1"
            >
              <img
                src="/flags/ru.png"
                alt="ru"
                className="w-5 h-5 rounded-full object-cover"
              />
              RU
            </Link>
            <Link
              to={createLangLink("am")}
              onClick={() => handleLanguageChange("am")}
              className="flex items-center gap-2  p-1"
            >
              <img
                src="/flags/am.png"
                alt="am"
                className="w-5 h-5 rounded-full object-cover"
              />
              AM
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
