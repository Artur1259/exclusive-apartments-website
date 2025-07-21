import { useOutletContext } from "react-router";

const VIsitOurOffice = () => {
  const { t } = useOutletContext();

  const icons = {
    "eiffel-tower.png": "/images/eiffel-tower.png",
    "big-ben.png": "/images/big-ben.png",
    "statue-of-liberty.png": "/images/statue-of-liberty.png",
    "kaskad.png": "/images/kaskad.png",
  };

  return (
    <div className="w-full bg-[#f0effd]">
      <div className="max-w-[380px] sm:max-w-[620px] md:max-w-[750px] lg:max-w-[980px] xl:max-w-[1152px] mx-auto py-10">
        <div>
          <h1 className="text-5xl font-bold">
            {t("officeLocationsSection.title")}
          </h1>
          <p className="py-5 text-lg">
            {t("officeLocationsSection.description")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {t("officeLocationsSection.locations", { returnObjects: true }).map(
            (item, index) => (
              <div key={index}>
                <div className=" bg-white rounded-2xl px-5 py-10">
                  <div className="w-[110px] h-[110px] rounded-full flex justify-center items-center">
                    <img
                      src={icons[item.icon]}
                      alt={item.description}
                      className="w-full h-full object-cover rounded-full bg-[#c3bff8] "
                    />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold">{item.city}</h2>
                    <p className="text-lg">{item.address}</p>
                    <p className="text-lg">{item.phone}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default VIsitOurOffice;
