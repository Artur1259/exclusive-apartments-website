import { useState } from "react";
import { useOutletContext } from "react-router";

const HeroSection = () => {
  const [value, setValue] = useState("");
  const [emailError, setEmailError] = useState("");
  const { t } = useOutletContext();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    setValue("");
    if (!validateEmail(value)) {
      setEmailError("Please enter a valid email address");
      return;
    }
  }

  return (
    <div className="max-w-[380px] sm:max-w-[620px] md:max-w-[750px] lg:max-w-[980px] xl:max-w-[1152px] mx-auto pb-10 ">
      <div className="w-full h-[90vh] bg-[url('/images/hero.avif')] bg-no-repeat bg-cover rounded-[4rem] ">
        <div className="lg:w-[60%] mf:w-[70%] w-full h-full flex flex-col items-start justify-center gap-4 px-10">
          <h1 className="lg:text-7xl md:text-5xl text-4xl font-semibold">
            {t("hero.title")}
          </h1>
          <span className="text-2xl py-3">{t("hero.subtitle")}</span>
          <form onSubmit={handleSubmit} className="md:w-[70%] lg:w-[90%] w-full md:flex md:flex-row flex flex-col gap-4 bg-gray-100 py-5 px-5 rounded-2xl relative">
            <input
              type="text"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                if (validateEmail(e.target.value)) {
                  setEmailError("");
                }
              }}
              placeholder={t("hero.placeholder")}
              className={`w-full px-4 py-3 rounded-full bg-white text-gray-600 focus:outline-none ${
                emailError ? "border-2 border-red-500" : ""
              }`}
            />
            {emailError && <span className="absolute left-5 -bottom-1 text-red-500 pb-1">{emailError}</span>}
            <button
              type="submit"
              className="uppercase bg-black text-white px-5 py-3 rounded-full cursor-pointer"
            >
              {t("hero.button")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
