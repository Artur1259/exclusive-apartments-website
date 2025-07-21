import { useOutletContext } from "react-router";

const GetYourDreamHouse = () => {
  
  const { t } = useOutletContext();
  return (
    <div className="w-full bg-[#f0effd] py-10">
      <div className="max-w-[380px] sm:max-w-[620px] md:max-w-[780px] lg:max-w-[980px] xl:max-w-[1152px] mx-auto px-4">
        <div className="pb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{t("dreamHouse.title")}</h1>
          <p className="py-5 text-base sm:text-lg">{t("dreamHouse.description")}</p>
        </div>
        <form className="w-full flex flex-col sm:flex-row flex-wrap gap-5">
          <div className="w-full sm:w-[calc(50%-10px)] flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
            <label htmlFor="name" className="sm:w-auto min-w-[60px]">
              {t("dreamHouse.form.nameLabel")}
            </label>
            <input
              type="text"
              id="name"
              placeholder={t("dreamHouse.form.namePlaceholder")}
              className="w-full py-2 sm:py-3 px-3 text-base sm:text-lg bg-white rounded-3xl"
            />
          </div>
          
          <div className="w-full sm:w-[calc(50%-10px)] flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
            <label htmlFor="email" className="sm:w-auto min-w-[60px]">
              {t("dreamHouse.form.emailLabel")}
            </label>
            <input
              type="email"
              id="email"
              placeholder={t("dreamHouse.form.emailPlaceholder")}
              className="w-full py-2 sm:py-3 px-3 text-base sm:text-lg bg-white rounded-3xl"
            />
          </div>
          
          <div className="w-full flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
            <label htmlFor="tel" className="sm:w-auto min-w-[60px]">
              {t("dreamHouse.form.telLabel")}
            </label>
            <input
              type="tel"
              id="tel"
              placeholder={t("dreamHouse.form.tel")}
              className="w-full py-2 sm:py-3 px-3 text-base sm:text-lg bg-white rounded-3xl"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-black text-white px-5 py-2 sm:py-3 rounded-3xl uppercase cursor-pointer"
          >
            {t("dreamHouse.form.submitButton")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetYourDreamHouse;