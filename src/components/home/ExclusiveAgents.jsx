import { useOutletContext } from "react-router";
import { motion } from "framer-motion";

const ExclusiveAgents = () => {
  const { t } = useOutletContext();
  return (
    <div className="h-full md:h-screen max-w-[380px] sm:max-w-[620px] md:max-w-[750px] lg:max-w-[980px] xl:max-w-[1152px] mx-auto py-10 flex flex-col  md:flex-row gap-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full md:w-[50%] h-full"
      >
        <img
          src={t("trustedAgents.image")}
          className="rounded-3xl h-full w-full object-cover"
        />
      </motion.div>
      <div className="w-full h-full md:w-[50%] px-10 py-20 bg-[#f0effd] rounded-3xl">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">{t("trustedAgents.title")}</h1>
        <p className="text-md md:text-xl py-5">{t("trustedAgents.text")}</p>
        {t("trustedAgents.features", { returnObjects: true }).map(
          (item, index) => (
            <ul key={index} className="list-disc font-bold text-md md:text-lg">
              <li className="py-2 ml-5">{item}</li>
            </ul>
          )
        )}
      </div>
    </div>
  );
};

export default ExclusiveAgents;
