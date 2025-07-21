const Footer = ({ t }) => {
  return (
    <div className="w-full h-[40vh] bg-[#333333] text-white">
      <div className="h-full max-w-[380px] sm:max-w-[620px] md:max-w-[750px] lg:max-w-[980px] xl:max-w-[1152px] mx-auto flex justify-center items-center">
        <div className="text-center">
          <p className="py-10">{t("footer.rights")}</p>
          <p className="py-10">{t("footer.creator")}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
