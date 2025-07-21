import { motion } from "framer-motion";
import { useOutletContext } from "react-router";

const ApartmentTypes = () => {
  const { t } = useOutletContext();
  return (
    <div className="max-w-[380px] sm:max-w-[620px] md:max-w-[750px] lg:max-w-[980px] xl:max-w-[1152px] mx-auto">
      <div>
        <h1 className="text-5xl font-bold">{t("apartmentTypes.title")}</h1>
        <button className="bg-black text-white px-6 py-4 mt-10 rounded-3xl cursor-pointer uppercase">
          {t("apartmentTypes.button")}
        </button>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {t("apartmentTypes.types", { returnObjects: true }).map(
            (item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group relative bg-[#f0effd] h-[250px] lg:h-[380px] my-10 rounded-3xl overflow-hidden"
              >
                <div className="h-[90%] p-10 rounded-3xl">
                  <img
                    src={item.url}
                    alt={item.description}
                    className="h-full w-full rounded-3xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>

                <div className="absolute bottom-4 left-[50%] translate-x-[-50%] p-2">
                  <h3 className="text-xl font-bold ">{item.name}</h3>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ApartmentTypes;
