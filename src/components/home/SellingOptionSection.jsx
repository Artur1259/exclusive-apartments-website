import { useOutletContext } from "react-router";
import { motion } from "framer-motion";
import { IoPeople } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { CiSettings } from "react-icons/ci";

const SellingOptionSection = () => {
  const { t } = useOutletContext();

  const iconComponents = {
    "<HiOutlineLightBulb />": HiOutlineLightBulb,
    "<CiSettings />": CiSettings,
    "<IoPeople />": IoPeople,
  };

  return (
    <div className="lg:h-[95vh] max-w-[380px] sm:max-w-[620px] md:max-w-[750px] lg:max-w-[980px] xl:max-w-[1152px] mx-auto flex flex-col md:flex-row gap-5">
      {/* Text Content */}
      <div className="w-full md:w-[50%] bg-[#f0effd] rounded-2xl p-6 md:p-10">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold mb-6 md:mb-10">
          {t("sellingOptions.title")}
        </h1>
        
        <div className="space-y-6 md:space-y-8">
          {t("sellingOptions.services", { returnObjects: true }).map(
            (item, index) => {
              const Icon = iconComponents[item.icon];
              return (
                <div 
                  key={index} 
                  className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 items-start"
                >
                  {/* Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ margin: "0px 0px -100px 0px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex justify-center items-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#c3bff8]"
                  >
                    {Icon && <Icon className="text-2xl md:text-3xl text-white" />}
                  </motion.div>

                  {/* Text Content */}
                  <div>
                    <h3 className="font-semibold text-lg md:text-xl lg:text-2xl mb-2">
                      {item.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full md:w-[50%] h-64 md:h-auto rounded-2xl overflow-hidden"
      >
        <img
          src={t("sellingOptions.url")}
          alt="Selling options"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default SellingOptionSection;