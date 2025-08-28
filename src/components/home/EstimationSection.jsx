import { useOutletContext } from "react-router";
import AnimatedCounter from "./AnimatedCounter";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const EstimationSection = () => {
  const { t } = useOutletContext();
  const { ready } = useTranslation();

  if (!ready) return <div>Loading...</div>;

  return (
    <div className="w-full my-14 bg-[#fbeced]">
      <section className="max-w-[380px] sm:max-w-[620px] md:max-w-[750px] lg:max-w-[980px] xl:max-w-[1152px] mx-auto">
        <div className="w-full h-full py-20 flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-center justify-evenly">
          <div>
            <h1 className="text-5xl font-bold text-center py-5">
              <AnimatedCounter
                key={`${i18next.language}-${t(
                  "statistics.award_winning.count"
                )}`}
                value={t("statistics.award_winning.count")}
                duration={0.5}
              />
            </h1>
            <p className="text-2xl font-bold">
              {t("statistics.award_winning.description")}
            </p>
          </div>
          <div>
            <h1 className="text-5xl font-bold text-center py-5">
              <AnimatedCounter
                key={`${i18next.language}-${t(
                  "statistics.property_ready.count"
                )}`}
                value={t("statistics.property_ready.count")}
                duration={0.5}
              />
            </h1>
            <p className="text-2xl font-bold">
              {t("statistics.property_ready.description")}
            </p>
          </div>
          <div>
            <h1 className="text-5xl font-bold text-center py-5">
              <AnimatedCounter
                key={`${i18next.language}-${t(
                  "statistics.happy_customer.count"
                )}`}
                value={t("statistics.happy_customer.count")}
                duration={0.5}
              />
            </h1>
            <p className="text-2xl font-bold">
              {t("statistics.happy_customer.description")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EstimationSection;
