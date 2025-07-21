import { useOutletContext } from "react-router";
import { motion } from "framer-motion";


const PropertiesForRent = () => {
  const { t } = useOutletContext();
  return (
    <div className="max-w-[380px] sm:max-w-[620px] md:max-w-[750px] lg:max-w-[980px] xl:max-w-[1152px] mx-auto pb-10">
      <div className="py-10">
        <h1 className="text-6xl font-semibold">{t("rent.title")}</h1>
        <button className="bg-black text-white px-5 py-3 mt-10 rounded-2xl cursor-pointer uppercase">
          {t("rent.button")}
        </button>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {t("rent.items", { returnObjects: true }).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group relative h-[250px] lg:h-[300px] rounded-3xl overflow-hidden"
            >
              <img
                src={item.url}
                alt={item.description}
                className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />

              <div className="absolute bottom-0 left-0 right-0 p-2">
                <div className="bg-white p-2 rounded-2xl">
                  <h3 className="text-xl font-semibold ">{item.price}</h3>
                  <p className="text-gray-600 py-3">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertiesForRent;
