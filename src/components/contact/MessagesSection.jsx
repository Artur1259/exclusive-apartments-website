import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router";

const MessagesSection = () => {
  const { t } = useOutletContext();
  const [state, handleSubmit] = useForm("mwpqpalk");
  const [showSuccess, setShowSuccess] = useState(false);
  const ref = useRef()

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      ref.current.reset();
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <div className="h-full md:h-screen max-w-[380px] sm:max-w-[620px] md:max-w-[750px] lg:max-w-[980px] xl:max-w-[1152px] mx-auto py-20 flex md:flex-row flex-col gap-5">
      <div className="w-full md:w-[50%] h-full p-10 bg-[#fbeced] rounded-3xl">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
          {t("contactSection.title")}
        </h1>
        <p className="py-5 text-md md:text-lg">
          {t("contactSection.subtitle")}
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full md:w-[50%] h-full p-10 bg-[#fbeced] rounded-3xl relative"
      >
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#fbeced] bg-opacity-90 flex items-center justify-center p-10 rounded-3xl z-10"
          >
            <p className="text-2xl font-bold text-center">
              Thank you for your message! We'll get back to you soon.
            </p>
          </motion.div>
        )}
        
        <form ref={ref} onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">{t("contactSection.formFields.nameLabel")}</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder={t("contactSection.formFields.namePlaceholder")}
              className="bg-white px-2 py-3 rounded-2xl"
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">{t("contactSection.formFields.emailLabel")}</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder={t("contactSection.formFields.emailPlaceholder")}
              className="bg-white px-2 py-3 rounded-2xl"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message">{t("contactSection.formFields.messageLabel")}</label>
            <textarea
              id="message"
              name="message"
              placeholder={t("contactSection.formFields.messagePlaceholder")}
              rows={4}
              className="bg-white px-2 py-3 rounded-2xl"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-black text-white px-7 py-3 mt-10 rounded-2xl cursor-pointer"
          >
            {t("contactSection.formFields.submitButton")}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default MessagesSection;