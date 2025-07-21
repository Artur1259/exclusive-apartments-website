import { useOutletContext } from "react-router";
import { motion } from "framer-motion";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const Testimonials = () => {
  const { t } = useOutletContext();

  return (
    <div className="h-full md:h-screen max-w-[380px] sm:max-w-[620px] md:max-w-[780px] lg:max-w-[980px] xl:max-w-[1152px] mx-auto flex flex-col md:flex-row gap-5 py-1 md:py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full h-full md:w-[50%]"
      >
        <img
          src={t("testimonials.url")}
          className="h-full w-full object-cover rounded-2xl"
        />
      </motion.div>
      <div className="w-full md:w-[50%] h-full bg-[#fbeced] rounded-2xl p-16">
        {t("testimonials.comments", { returnObjects: true }).map((item, index) => (
            <div key={index} className="pb-5 lg:pb-14">
                <BiSolidQuoteAltRight  className="text-2xl lg:text-4xl" />
                <p className="py-5 text-md lg:text-xl">{item.text}</p>
                <p className="font-bold text-md lg:text-xl">{item.author}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
